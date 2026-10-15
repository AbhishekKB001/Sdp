# 🚀 AWS Deployment Guide - MotoVerse Motorcycle Catalog

This comprehensive guide details how to deploy the **MotoVerse Motorcycle Catalog** application to Amazon Web Services (AWS) using different architectures based on your preference and budget.

---

## ⚡ Option 1: AWS Amplify Hosting (Recommended & Fastest)
* **Best for:** Fastest setup, zero server management, automatic free SSL (HTTPS), global CDN, and 100% AWS Free Tier friendly.
* **Estimated time:** 2 minutes.

### Method A: Direct Drag-and-Drop (No Git Required)
1. **Build the production bundle:**
   ```bash
   cd bike-catalog
   npm run build
   ```
   This generates the optimized static files in the `dist/` directory.

2. **Zip the `dist` folder:**
   * On Windows: Open the `bike-catalog` folder, right-click the `dist` folder &rarr; **Compress to ZIP file** (name it `dist.zip`).
   * Or in PowerShell:
     ```powershell
     Compress-Archive -Path dist\* -DestinationPath dist.zip -Force
     ```

3. **Deploy in AWS Console:**
   * Go to the [AWS Amplify Console](https://console.aws.amazon.com/amplify).
   * Click **Create new app** &rarr; Select **Deploy without Git**.
   * App name: `motoverse-bike-catalog`
   * Environment name: `production`
   * Method: Choose **Drag and drop**, select your `dist.zip` file.
   * Click **Save and deploy**.
   * AWS will deploy your app in ~30 seconds and provide a live public HTTPS URL (e.g. `https://main.d1234abcd.amplifyapp.com`).

---

### Method B: Continuous Deployment via GitHub / GitLab
1. Initialize a Git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of MotoVerse bike catalog"
   git remote add origin https://github.com/your-username/bike-catalog.git
   git push -u origin main
   ```
2. In [AWS Amplify Console](https://console.aws.amazon.com/amplify), choose **Host web app** &rarr; **GitHub**.
3. Select your repository and `main` branch.
4. Amplify will automatically detect Vite/React settings:
   * **Build command:** `npm run build`
   * **Base directory:** `dist`
5. Click **Save and deploy**. Any future git pushes will automatically rebuild and deploy your site!

---

## 🌐 Option 2: AWS S3 + Amazon CloudFront (Enterprise Static Hosting)
* **Best for:** High availability, custom domain names with Route 53, and sub-cent monthly pricing.

### Method A: Automated Deployment via PowerShell Script
We have provided an automated script [`deploy-aws.ps1`](file:///c:/Users/soloh/OneDrive/Desktop/dv/bike-catalog/deploy-aws.ps1):

1. Ensure AWS CLI is configured:
   ```powershell
   aws configure
   ```
2. Run the deployment script:
   ```powershell
   cd bike-catalog
   .\deploy-aws.ps1 -Region "us-east-1"
   ```
3. The script automatically builds the Vite app, creates an S3 bucket with static website hosting, configures public access policies, uploads all assets, and outputs your live website URL!

---

### Method B: Manual Step-by-Step (AWS CLI)
1. **Build the assets:**
   ```bash
   npm run build
   ```

2. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://my-motoverse-catalog-bucket-2026 --region us-east-1
   ```

3. **Configure public read access:**
   ```bash
   aws s3api put-public-access-block --bucket my-motoverse-catalog-bucket-2026 --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
   ```

4. **Attach S3 website policy:**
   Create `policy.json`:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::my-motoverse-catalog-bucket-2026/*"
       }
     ]
   }
   ```
   Apply it:
   ```bash
   aws s3api put-bucket-policy --bucket my-motoverse-catalog-bucket-2026 --policy file://policy.json
   ```

5. **Enable Static Website Hosting:**
   ```bash
   aws s3 website s3://my-motoverse-catalog-bucket-2026 --index-document index.html --error-document index.html
   ```

6. **Sync assets:**
   ```bash
   aws s3 sync dist/ s3://my-motoverse-catalog-bucket-2026 --delete
   ```
   *Your site will be live at:* `http://my-motoverse-catalog-bucket-2026.s3-website-us-east-1.amazonaws.com`

---

## 🛠 Option 3: Automated CloudFormation Stack (1-Click S3 + CloudFront + OAC)
For enterprise security, the included [`aws-infrastructure.yaml`](file:///c:/Users/soloh/OneDrive/Desktop/dv/bike-catalog/aws-infrastructure.yaml) deploys an S3 bucket with **Origin Access Control (OAC)** and an **Amazon CloudFront Distribution**:

1. Deploy the stack:
   ```bash
   aws cloudformation deploy \
     --template-file aws-infrastructure.yaml \
     --stack-name motoverse-catalog-stack \
     --parameter-overrides ProjectName=motoverse-bikes
   ```
2. Upload the website build to the created S3 bucket:
   ```bash
   BUCKET=$(aws cloudformation describe-stacks --stack-name motoverse-catalog-stack --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" --output text)
   aws s3 sync dist/ s3://$BUCKET --delete
   ```
3. Retrieve your CloudFront HTTPS URL:
   ```bash
   aws cloudformation describe-stacks --stack-name motoverse-catalog-stack --query "Stacks[0].Outputs[?OutputKey=='WebsiteURL'].OutputValue" --output text
   ```

---

## 🐳 Option 4: Docker & AWS App Runner / Amazon ECS / EC2
If your architecture requires Docker containerization:

1. **Build Docker image:**
   ```bash
   docker build -t motoverse-bike-catalog .
   ```
2. **Run locally to test:**
   ```bash
   docker run -d -p 8080:80 motoverse-bike-catalog
   ```
   Open `http://localhost:8080`.

3. **Deploy to AWS App Runner or AWS Elastic Container Service (ECS):**
   * Tag and push the image to **Amazon Elastic Container Registry (ECR)**:
     ```bash
     aws ecr create-repository --repository-name motoverse-bike-catalog
     docker tag motoverse-bike-catalog:latest <aws_account_id>.dkr.ecr.<region>.amazonaws.com/motoverse-bike-catalog:latest
     aws ecr get-login-password | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
     docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/motoverse-bike-catalog:latest
     ```
   * In AWS App Runner console, create a new service and select your ECR image. App Runner will provide auto-scaling, health checks, and HTTPS out of the box!

---

## 🔍 Verification & Testing
After deployment, verify:
* [x] All 16+ motorcycle models render in the showroom
* [x] Search, category chips, and brand filters work seamlessly
* [x] Clicking any motorcycle opens the full technical specs, heritage description, pros/cons, and color preview
* [x] Currency switch between USD ($) and INR (₹) updates all card prices and loan amounts
* [x] Side-by-side comparison drawer compares up to 3 selected models
* [x] Interactive financing / EMI calculator calculates payments accurately
