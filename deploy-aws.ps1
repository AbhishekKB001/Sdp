# ==============================================================================
# MotoVerse Motorcycle Catalog - AWS S3 Static Website Deployment Script
# ==============================================================================
# Prerequisites:
# 1. AWS CLI installed and configured ('aws configure')
# 2. Node.js and npm installed
# ==============================================================================

param(
    [string]$BucketName = ("motoverse-bike-catalog-" + (Get-Random -Minimum 1000 -Maximum 9999)),
    [string]$Region = "us-east-1"
)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " MotoVerse - Deploying to Amazon Web Services (AWS S3)   " -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "Target S3 Bucket : $BucketName" -ForegroundColor White
Write-Host "Target AWS Region : $Region" -ForegroundColor White
Write-Host ""

# Step 1: Check AWS CLI
Write-Host "[1/6] Verifying AWS CLI configuration..." -ForegroundColor Cyan
try {
    $callerIdentity = aws sts get-caller-identity --output json | ConvertFrom-Json
    Write-Host "✓ Authenticated as AWS Account: $($callerIdentity.Account)" -ForegroundColor Green
} catch {
    Write-Host "✗ AWS CLI is not configured or authenticated." -ForegroundColor Red
    Write-Host "Please run 'aws configure' first and supply your AWS Access Key, Secret Key, and Region." -ForegroundColor Yellow
    exit 1
}

# Step 2: Build the project
Write-Host "[2/6] Building production web bundle with Vite..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Build failed. Please resolve the errors above." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Production bundle created successfully in 'dist/'" -ForegroundColor Green

# Step 3: Create S3 Bucket
Write-Host "[3/6] Creating S3 bucket '$BucketName'..." -ForegroundColor Cyan
if ($Region -eq "us-east-1") {
    aws s3 mb "s3://$BucketName" --region $Region
} else {
    aws s3api create-bucket --bucket $BucketName --region $Region --create-bucket-configuration LocationConstraint=$Region
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to create S3 bucket. Ensure the bucket name is globally unique." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Bucket created: s3://$BucketName" -ForegroundColor Green

# Step 4: Configure Public Access Settings
Write-Host "[4/6] Configuring Public Read Policy for Static Hosting..." -ForegroundColor Cyan
aws s3api put-public-access-block --bucket $BucketName --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

$PolicyContent = @"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BucketName/*"
    }
  ]
}
"@

$PolicyFile = "$PSScriptRoot/s3-policy-temp.json"
Set-Content -Path $PolicyFile -Value $PolicyContent
aws s3api put-bucket-policy --bucket $BucketName --policy file://$PolicyFile
Remove-Item $PolicyFile -ErrorAction SilentlyContinue

# Configure Static Website Hosting
aws s3 website "s3://$BucketName" --index-document index.html --error-document index.html
Write-Host "✓ Static Website Hosting configured." -ForegroundColor Green

# Step 5: Sync Dist Files to S3
Write-Host "[5/6] Uploading website files to S3..." -ForegroundColor Cyan
aws s3 sync dist/ "s3://$BucketName" --delete --cache-control "public, max-age=31536000, immutable" --exclude "index.html"
aws s3 sync dist/ "s3://$BucketName" --exclude "*" --include "index.html" --cache-control "no-cache"
Write-Host "✓ All files uploaded to S3." -ForegroundColor Green

# Step 6: Output URL
$WebsiteUrl = if ($Region -eq "us-east-1") {
    "http://$BucketName.s3-website-us-east-1.amazonaws.com"
} else {
    "http://$BucketName.s3-website.$Region.amazonaws.com"
}

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Green
Write-Host " DEPLOYMENT SUCCESSFUL!                                   " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "Your website is live at:" -ForegroundColor White
Write-Host "$WebsiteUrl" -ForegroundColor Yellow -NoNewline
Write-Host ""
Write-Host "Tip: For HTTPS and custom domains, connect Amazon CloudFront to this S3 bucket." -ForegroundColor Cyan
