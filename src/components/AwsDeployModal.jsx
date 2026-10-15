import React, { useState } from 'react';
import { X, Cloud, Terminal, CheckCircle2, Copy, ExternalLink, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

export default function AwsDeployModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('amplify'); // 'amplify' | 's3' | 'docker'
  const [copiedScript, setCopiedScript] = useState(false);

  const s3Script = `# 1. Build the production bundle
npm run build

# 2. Set your unique AWS S3 bucket name & region
$BUCKET_NAME = "motoverse-bike-catalog-" + (Get-Random -Minimum 1000 -Maximum 9999)
$REGION = "us-east-1"

# 3. Create the S3 bucket
aws s3 mb "s3://$BUCKET_NAME" --region $REGION

# 4. Disable Block Public Access for static website hosting
aws s3api put-public-access-block --bucket $BUCKET_NAME --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# 5. Apply Public Read Bucket Policy
$POLICY = @"
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
"@
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy $POLICY

# 6. Enable Static Website Hosting
aws s3 website "s3://$BUCKET_NAME" --index-document index.html --error-document index.html

# 7. Sync build files to S3
aws s3 sync dist/ "s3://$BUCKET_NAME" --delete

# 8. Output your live website URL
Write-Host "Website Live at: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com" -ForegroundColor Green
`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col text-slate-100 my-auto">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/95 backdrop-blur z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-white">AWS Deployment Blueprint</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Ready to Ship
                </span>
              </div>
              <p className="text-xs text-slate-400">Step-by-step guides for deploying this bike catalog website to Amazon Web Services</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Method Selector Tabs */}
        <div className="flex items-center border-b border-slate-800 bg-slate-950/60 px-6 gap-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('amplify')}
            className={`py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'amplify'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Option 1: AWS Amplify (Recommended / Easiest)</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">2 Mins</span>
          </button>

          <button
            onClick={() => setActiveTab('s3')}
            className={`py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 's3'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Option 2: AWS S3 + CloudFront (Enterprise CDN)</span>
          </button>

          <button
            onClick={() => setActiveTab('docker')}
            className={`py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'docker'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Option 3: Docker & AWS App Runner / EC2</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* TAB 1: AWS AMPLIFY */}
          {activeTab === 'amplify' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold mb-1">Why AWS Amplify is the best choice:</strong>
                  AWS Amplify provides free SSL HTTPS certificate, global Amazon CloudFront CDN, custom domain support, and continuous deployment directly from Git or manual drag-and-drop zip with zero server configuration.
                </div>
              </div>

              {/* Step by Step list */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Method A: Manual Drag & Drop (No Git Required)</h3>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                    <div>
                      <span className="font-bold text-white block mb-1">Build Production Assets</span>
                      <p className="text-slate-400">In the terminal, run the build command inside the <code className="text-orange-400 bg-slate-900 px-1.5 py-0.5 rounded">bike-catalog</code> directory:</p>
                      <pre className="mt-2 p-2.5 rounded-lg bg-slate-900 font-mono text-xs text-emerald-400 border border-slate-800">npm run build</pre>
                      <p className="text-slate-400 mt-1">This outputs a static <code className="text-white font-bold">dist/</code> folder containing all bundled HTML, JS, and CSS.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                    <div>
                      <span className="font-bold text-white block mb-1">Zip the <code className="text-orange-400">dist</code> Folder</span>
                      <p className="text-slate-400">Compress the contents of the <code className="text-white">dist</code> folder into a zip file named <code className="text-white font-semibold">dist.zip</code>.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                    <div>
                      <span className="font-bold text-white block mb-1">Deploy on AWS Amplify Console</span>
                      <ol className="list-decimal list-inside text-slate-300 space-y-1.5 mt-1">
                        <li>Log into <a href="https://console.aws.amazon.com/amplify" target="_blank" rel="noreferrer" className="text-orange-400 hover:underline">AWS Amplify Console</a>.</li>
                        <li>Click <strong>"Create new app"</strong> &rarr; Select <strong>"Deploy without Git"</strong>.</li>
                        <li>Set App name to <strong>"MotoVerse-Bike-Catalog"</strong> and environment to <strong>"production"</strong>.</li>
                        <li>Drag & drop your <code className="text-orange-300">dist.zip</code> file and click <strong>"Save and deploy"</strong>.</li>
                        <li>Within 30 seconds, AWS Amplify assigns you a live public HTTPS URL (e.g. <code className="text-emerald-400">https://main.d1234abcd.amplifyapp.com</code>).</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider pt-3">Method B: Automatic Git CI/CD</h3>
                <p className="text-xs text-slate-400">
                  Push this project to GitHub/GitLab, connect your repository in AWS Amplify, and AWS will automatically rebuild and deploy on every git push!
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: AWS S3 + CLOUDFRONT */}
          {activeTab === 's3' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm text-slate-200">
                <strong className="text-white block font-bold mb-1">AWS S3 Static Website Hosting + CloudFront CDN</strong>
                Host your static files directly in an S3 bucket with ultra-low latency, virtually infinite scale, and sub-cent monthly pricing.
              </div>

              {/* Ready PowerShell Script */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Automated PowerShell Deploy Script</span>
                  <button
                    onClick={() => copyToClipboard(s3Script)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 text-xs font-bold transition-all"
                  >
                    {copiedScript ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedScript ? 'Copied to Clipboard!' : 'Copy Deploy Script'}</span>
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800 overflow-x-auto leading-relaxed">
                  {s3Script}
                </pre>
              </div>

              {/* Step overview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-orange-400 block mb-1">1. Bucket Creation</span>
                  <span className="text-slate-400">S3 bucket created with static website hosting enabled for index.html.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-cyan-400 block mb-1">2. Public Access</span>
                  <span className="text-slate-400">Public read policy configured to allow worldwide web access.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-emerald-400 block mb-1">3. CloudFront Edge</span>
                  <span className="text-slate-400">CloudFront CDN caches website in 400+ points of presence worldwide.</span>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: DOCKER / APP RUNNER */}
          {activeTab === 'docker' && (
            <div className="space-y-4">
              
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm text-slate-200">
                <strong className="text-white block font-bold mb-1">Containerized Deployment (AWS App Runner / ECS / EC2)</strong>
                If your organization requires running Docker containers behind an Application Load Balancer (ALB) or on AWS App Runner, use the included Dockerfile.
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Production Dockerfile Included:</span>
                <pre className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-cyan-300 border border-slate-800 overflow-x-auto leading-relaxed">
{`# Multi-stage Docker build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Nginx Production Server
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
                </pre>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                <span className="text-white font-bold block mb-1">Build & Run Locally:</span>
                <code className="text-emerald-400">docker build -t motoverse-bike . &amp;&amp; docker run -p 8080:80 motoverse-bike</code>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Scripts &amp; files (<code className="text-orange-400">deploy-aws.ps1</code>, <code className="text-orange-400">Dockerfile</code>) are included in this repo.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
          >
            Close Guide
          </button>
        </div>

      </div>

    </div>
  );
}
