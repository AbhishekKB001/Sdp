# 🎓 SDP Presentation & Demonstration Script
## Project: MotoVerse Motorcycle Catalog — Cloud Hosting on AWS (S3 & EC2)

---

## 🎯 1. Presentation Outline & Opening Statement (30 Seconds)

> **Say this to your lecturer:**
> 
> *"Good morning / afternoon sir/madam. For my Software Development Project (SDP), I developed **MotoVerse**, a full-featured motorcycle catalog web application built with React and Tailwind CSS that enables users to browse bike models, compare specs side-by-side, and calculate financing EMIs.*
>
> *To demonstrate real-world cloud deployment architectures, I have deployed and benchmarked the application across two core AWS cloud paradigms:*
> 1. ***Serverless Object Storage Hosting*** *using **Amazon S3**.*
> 2. ***Infrastructure-as-a-Service (IaaS) Compute Hosting*** *using an **Amazon EC2 Linux Instance running Nginx**.*
>
> *I will now demonstrate the architecture, the uploaded build artifacts, and live running endpoints for both."*

---

## ☁️ 2. Part A: Demonstrating AWS S3 Hosting

### What to Show on Your Screen:
1. **Open AWS Console &rarr; Amazon S3**:
   - Show your bucket name: `motoverse-bike-catalog` (or your bucket name).
   - Point to the **Objects list**:
     ```text
     ├── index.html        (Root SPA Document)
     ├── favicon.svg       (Browser Tab Icon)
     ├── icons.svg         (Vector Assets)
     └── assets/           (Minified JS & CSS bundles)
         ├── index-9QlzplCJ.js
         └── index-BUIQwm5U.css
     ```

2. **Show Bucket Properties (Static Website Hosting)**:
   - Click **Properties** tab &rarr; scroll to bottom &rarr; show **Static website hosting: Enabled**.
   - Show:
     - **Index document**: `index.html`
     - **Error document**: `index.html`
   - Point to the **Bucket website endpoint URL**:  
     `http://<bucket-name>.s3-website-<region>.amazonaws.com`

3. **Show Permissions & Bucket Policy**:
   - Click **Permissions** tab.
   - Show that **Block all public access** is turned OFF for website hosting.
   - Show the **Bucket Policy JSON**:
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Sid": "PublicReadGetObject",
           "Effect": "Allow",
           "Principal": "*",
           "Action": "s3:GetObject",
           "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
         }
       ]
     }
     ```

4. **Click the Live S3 URL**:
   - Open the S3 website URL in a browser tab.
   - Show the live MotoVerse application loading with full interactivity.

---

## 💻 3. Part B: Demonstrating AWS EC2 Hosting

### What to Show on Your Screen:
1. **Open AWS Console &rarr; EC2 Dashboard**:
   - Show the running instance:
     - **Instance State**: `Running`
     - **Instance Type**: `t2.micro` (AWS Free Tier eligible)
     - **Public IPv4 address**: (e.g. `13.233.xx.xx`)
   - Click **Security** tab:
     - Show **Security Group Inbound Rules**:
       - `Port 22` (SSH) — For remote deployment access.
       - `Port 80` (HTTP) — Source `0.0.0.0/0` (Allows public internet access to the web server).

2. **Terminal / SSH Demonstration (The Academic High-Mark Moment)**:
   Open PowerShell or Terminal and connect to your EC2 instance:
   ```bash
   ssh -i "your-key.pem" ubuntu@<EC2-PUBLIC-IP>
   ```

   Once logged into the EC2 terminal, run these commands in front of your lecturer:

   **Command 1: Show the web server is actively running**
   ```bash
   sudo systemctl status nginx
   ```
   *(Point out the green `active (running)` status).*

   **Command 2: Show the uploaded website files inside the Linux filesystem**
   ```bash
   ls -la /var/www/html
   ```
   *(Point out `index.html`, `favicon.svg`, `icons.svg`, and the `assets/` directory).*

   **Command 3: Show the compiled assets inside `/var/www/html/assets`**
   ```bash
   ls -la /var/www/html/assets
   ```

   **Command 4: Show the Nginx configuration handling SPA routing**
   ```bash
   cat /etc/nginx/conf.d/default.conf
   ```
   *(Explain the `try_files $uri $uri/ /index.html;` line that prevents 404 errors on single-page apps).*

3. **Open the EC2 Public IP in your browser**:
   - Navigate to `http://<EC2-PUBLIC-IP>`
   - Show that the exact same application is served from your dedicated Linux virtual machine.

---

## 🧠 4. Why We Uploaded `dist/` and NOT `src/` or `node_modules` (Technical Explanation)

Your lecturer will definitely appreciate this technical explanation:

1. **Client-Side Build Compilation**:
   - React and JSX cannot be directly executed natively by web browsers or static web servers.
   - Running `npm run build` with Vite compiles, bundles, tree-shakes, and minifies the code.
2. **Bandwidth & Storage Optimization**:
   - `node_modules` is over **150+ MB** containing developer dependencies, linters, and compilers.
   - The compiled `dist/` bundle is only **~400 KB** total. Uploading raw source code would waste storage and bandwidth.
3. **Security**:
   - Uploading raw source files (`src/`) or repository configs (`.env`, `package.json`) to a public S3 bucket or unhardened EC2 directory poses security risks. Serving only pre-compiled production bundles protects source assets.

---

## 📊 5. Comparative Evaluation: S3 vs EC2 (Viva Points)

Present this comparative analysis to demonstrate deep technical understanding:

| Evaluation Metric | Amazon S3 (Serverless Storage) | Amazon EC2 (Virtual Machine IaaS) |
| :--- | :--- | :--- |
| **Hosting Model** | Serverless Object Storage | Dedicated Virtual Machine (IaaS) |
| **Web Server Required?** | None (Built-in AWS S3 web engine) | Yes (Installed & configured Nginx) |
| **Maintenance Overhead** | **Zero** (AWS manages hardware, OS & scaling) | **High** (Requires OS updates, security patches, firewall configuration) |
| **Scalability** | Virtually unlimited automatic request scaling | Limited by instance size (requires Auto-Scaling Groups & Load Balancer) |
| **High Availability** | 99.99% availability, replicated across 3 AZs | Single AZ by default (requires multi-AZ ELB for redundancy) |
| **Cost Efficiency** | Extremely cheap (pay only per GB stored & requested, fractions of a cent) | Continuous hourly runtime cost ($8–$15/month if not stopped) |
| **Best Used For** | Static Websites, SPAs, Jamstack, Headless Frontends | Backend APIs (Node/Express, Python/Django), WebSockets, Databases |

---

## ❓ 6. Expected Lecturer / Viva Questions & Answers

### Q1: *"What happens if a user navigates or refreshes on a subpath?"*
> **Your Answer:**  
> *"In a client-side Single Page Application (SPA), routing is handled in the browser by JavaScript. If a user refreshes a subpath, the web server looks for a physical directory.  
> - In **S3**, I configured the **Error document** as `index.html` so all requests route back to the React app.  
> - In **EC2**, I configured Nginx with `try_files $uri $uri/ /index.html;` to rewrite all unhandled routes back to `index.html`."*

### Q2: *"Why did you use Nginx instead of Apache on EC2?"*
> **Your Answer:**  
> *"Nginx uses an asynchronous, event-driven, non-blocking architecture, which consumes significantly lower memory and CPU overhead compared to Apache's process-per-connection model. This makes Nginx the industry standard for serving static assets and reverse-proxying single-page web applications."*

### Q3: *"How do you secure HTTP traffic to HTTPS on both platforms?"*
> **Your Answer:**  
> *- For **S3**: Attach **Amazon CloudFront CDN** with an **AWS Certificate Manager (ACM)** free SSL certificate.*  
> *- For **EC2**: Attach an **Application Load Balancer (ALB)** with an ACM certificate, or install **Certbot (Let's Encrypt)** directly on the EC2 instance.*

---

## 🏁 7. Quick 2-Minute Demo Checklist

Before your lecturer arrives:
- [ ] Have the **S3 Bucket Console** open in Tab 1.
- [ ] Have the **S3 Live Website** open in Tab 2.
- [ ] Have the **EC2 Dashboard** open in Tab 3.
- [ ] Have the **EC2 Live Website (`http://<ip>`)** open in Tab 4.
- [ ] Have your **Terminal / PowerShell** SSH'd into EC2 ready to type `systemctl status nginx` and `ls -la /var/www/html`.
