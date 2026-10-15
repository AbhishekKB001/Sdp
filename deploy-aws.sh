#!/bin/bash
# ==============================================================================
# MotoVerse Motorcycle Catalog - AWS S3 Static Website Deployment Script (Bash)
# ==============================================================================

set -e

BUCKET_NAME=${1:-"motoverse-bike-catalog-$RANDOM"}
REGION=${2:-"us-east-1"}

echo "=========================================================="
echo " MotoVerse - Deploying to Amazon Web Services (AWS S3)   "
echo "=========================================================="
echo "Target S3 Bucket : $BUCKET_NAME"
echo "Target AWS Region : $REGION"
echo ""

echo "[1/5] Building production bundle..."
npm run build

echo "[2/5] Creating S3 Bucket..."
if [ "$REGION" = "us-east-1" ]; then
  aws s3 mb "s3://$BUCKET_NAME" --region "$REGION"
else
  aws s3api create-bucket --bucket "$BUCKET_NAME" --region "$REGION" --create-bucket-configuration LocationConstraint="$REGION"
fi

echo "[3/5] Configuring public access and static website hosting..."
aws s3api put-public-access-block --bucket "$BUCKET_NAME" --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

POLICY=$(cat <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
    }
  ]
}
EOF
)

aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy "$POLICY"
aws s3 website "s3://$BUCKET_NAME" --index-document index.html --error-document index.html

echo "[4/5] Uploading web assets to S3..."
aws s3 sync dist/ "s3://$BUCKET_NAME" --delete

echo "[5/5] Deployment Complete!"
echo "Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
