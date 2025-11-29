# SwapLab: Capacitor Templates (Monorepo)

![SwapLab Certified](https://img.shields.io/badge/SwapLab-Certified-success)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Structure](https://img.shields.io/badge/Structure-Monorepo-orange)

This repository hosts a curated collection of production-ready starter templates for building Android & iOS apps using **Capacitor 7**.

We have modernized, sanitized, and pre-configured these popular community templates to ensure they work seamlessly with the [SwapLab Build Service](https://swaplab.net).

---

## ⚠️ CRITICAL: Privacy & Billing Guide

Before using these templates, please read these rules to ensure your code is safe and your billing is managed correctly.

### 🔒 1. Privacy Rule: Make Your Fork PRIVATE
When you fork this repository to your account, **you must change the visibility to PRIVATE** immediately to protect your source code.
* **Why?** To prevent leaking your App ID, API Keys, or proprietary code to the internet.
* **Compatibility:** You **do not** need a public repo to use SwapLab. Our public build images can be pulled into your **Private Repository** without any limits.

### 💰 2. Billing & Service Model
It is important to distinguish between **GitHub Costs** and **SwapLab Service Costs**.

**A. GitHub Actions Quota (Compute)**
The build process runs inside *your* GitHub account.
* **Free Accounts:** GitHub typically provides **2,000 free minutes/month**.
* **Capacity:** ~300-400 builds/month.
* **Upgrade:** If you exceed this, you pay GitHub directly via [GitHub Actions Billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions).

**B. SwapLab Subscription (Orchestration)**
We offer a **Free Tier** (Unlimited Debug builds) and **Paid Tiers** (Release builds).
* **Philosophy:** Our fees are **not** for reselling GitHub minutes. They cover our physical resources (vCPU, RAM, NVMe, Storage) and security infrastructure.
* **How to Upgrade:** You can view plans and upgrade your account directly within the **SwapLab Dashboard** after signing in.

👉 **[View Pricing & Plans](https://pricing.swaplab.net)**

---

## 🖥️ Advanced: Bring Your Own Runner (VPS)

For power users who need **Unlimited Builds** or extreme performance, you can run the SwapLab Engine on your own infrastructure (VPS/Dedicated Server) instead of using GitHub's shared runners.

### Why use Self-Hosted?
* **Unlimited Minutes:** Bypass GitHub's 2,000-minute monthly quota.
* **High Performance:** Use high-spec servers (e.g., 8 vCPU) for faster compilation.
* **Cost Control:** Flat monthly fee for your VPS, regardless of how many builds you run.

### ⚙️ Configuration Steps

1.  **Setup Runner:** Install the GitHub Actions Runner on your VPS (Settings > Actions > Runners > New self-hosted runner).
2.  **Update Workflow:** Edit your `.github/workflows/capacitor-workflow-*.yml` file. Change the `runs-on` value:

```yaml
jobs:
  build:
    # Change from 'ubuntu-latest' to 'self-hosted'
    runs-on: self-hosted
```

### 🔓 3. Public Repositories (Unlimited Minutes?)
Public repositories often get unlimited Action minutes from GitHub, but they are intended **ONLY** for:
* Open Source / Plugin Development.
* Simple testing or Demos (No sensitive data).
* **WARNING:** Do not use public repositories for private/commercial projects. **Any data leakage resulting from the use of a Public Repository is the sole responsibility of the user.**

---

## 📂 Available Templates

Choose your preferred framework below. Each folder contains a complete, isolated project.

| Framework | Folder Name | Stack Details |
| :--- | :--- | :--- |
| **Angular** | [`/angular`](./angular) | Ionic 7 + Angular 16+ |
| **React** | [`/react`](./react) | React 18 + Vite 5 |
| **Next.js** | [`/nextjs`](./nextjs) | Next.js 14 (App Router) + Tailwind |
| **SolidJS** | [`/solidjs`](./solidjs) | SolidJS + Vite |

---

## ⚙️ Build Configuration Guide

SwapLab offers advanced build settings to customize your security and performance. Here is an explanation of each option available in the Dashboard:

### 1. 🛠️ Build Provider
Select the CI/CD infrastructure to run your build process. We recommend keeping the build environment close to your repository hosting for optimal speed.

| Provider | Status | Specs (Free Tier) | Quota / Month | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **GitHub** | ✅ **Default** | 2 vCPU, 7GB RAM | ~2,000 mins | **General Use.** Perfect for private repos. Enough for ~400 builds/month. |
| **CircleCI** | 🚧 *Coming Soon* | Up to **4 vCPU, 16GB RAM** (Large) | 30,000 Credits (~6,000 mins) | **Performance.** Includes *Docker Layer Caching* for blazing fast builds (skips re-downloading images). |
| **GitLab** | 🚧 *Coming Soon* | Shared Runners | 400 mins | GitLab Users. |

* **GitHub (Default):** Uses standard GitHub Actions runners. Compatible with both Free and Pro GitHub accounts.
* **CircleCI (Premium Integration):** Will offer significantly faster build times due to persistent Docker Layer Caching (images are pulled once and cached) and higher resource classes (Medium/Large instances).

### 2. 🛡️ Vulnerability Scan (NPM Audit)
**Status:** <span style="color:red">MANDATORY</span>
Checks your project's dependencies against the CVE database for known security flaws.
* **Why Mandatory?** Prevents shipping apps with known critical vulnerabilities that could be exploited by attackers.
* **Outcome:** Build fails if `HIGH` or `CRITICAL` vulnerabilities are found.

### 3. 🔍 Semgrep (SAST)
**Status:** <span style="color:red">MANDATORY</span>
Static Application Security Testing. Scans your source code for insecure patterns (e.g., hardcoded secrets, injection flaws) before installation.
* **Why Mandatory?** Provides a first line of defense for your proprietary code.

### 4. 📦 Trivy (SCA)
**Status:** <span style="color:red">MANDATORY</span>
Software Composition Analysis. Scans third-party libraries (from `package-lock.json`) for deep supply chain vulnerabilities.
* **Why Mandatory?** Ensures no compromised libraries are included in your final app.

### 5. 🔒 NPM Script Security
**Status:** Optional (Default: Off)
* **Enabled:** Adds `--ignore-scripts` to the `npm install` command.
* **Benefit:** Prevents malicious "post-install" scripts from running (Supply Chain Attack prevention).
* **Risk:** Some legitimate packages *require* scripts to build native binaries. Enable this only if you are sure your dependencies don't need scripts.

### 6. 💊 Auto-Heal Vulnerabilities
**Status:** Optional (Default: Off)
* **Function:** Automatically runs `npm audit fix` **before** the security scan.
* **Benefit:** Can automatically repair minor vulnerability issues, preventing the build from failing due to trivial CVEs. Acts as a "Doctor" before the "Police" check.
* **Risk:** Auto-updates might rarely introduce breaking changes in old projects.

### 7. 🔬 Final Artifact Scan
**Status:** Optional (Default: Off)
* **Enabled:** Runs `clamscan` (Anti-virus) on the final APK/AAB file.
* **Disabled:** Skips the final scan to speed up the build process (saves ~30-60 seconds).
* **Recommendation:** Disable if build speed is critical; Enable for maximum security assurance.

---



---

## ⚖️ Service Rules & Architecture

This template runs on the SwapLab SaaS infrastructure. It is critical that you understand the operational limits and security flow before building.

> **📖 [READ THE FULL INTEGRATION GUIDE](https://github.com/swaplab-engine/workflow-templates#readme)**
>
> Visit our **Workflow Templates** repository for detailed documentation on:
> * **Rate Limits:** Strict limit of **3 builds per 5 minutes** (Fairness Policy).
> * **Security Architecture:** How we use ephemeral R2 storage and memory-only signing.
> * **Billing:** How SwapLab fees work alongside your GitHub Actions quota.

---


## ⚡ How to Build


You can use these templates directly with the SwapLab Service.

### Option A: CI/CD Automation (Recommended)
*Best for forking this entire collection and building a specific app directly from GitHub.*

1.  **Fork Repository:** Click **`Fork`** (top right) to copy this monorepo to your account. **Remember to set it to PRIVATE.**
2.  **Access Service:** Log in to [SwapLab.net](https://swaplab.net). **Select your forked repository** *(Your repo connects automatically upon login).*
3.  **Select Builder:** From the main menu, click **Repository Builder** (Builder Plus).
4.  **Start Build:**
    * Select "Platform" (Android/iOS).
    * Select "Capacitor" as the Framework Type.
    * **Project Folder Name:** Enter the specific folder name you want to build (e.g., `react`, `angular`, or `nextjs`).
    * Click "Build from Repository".

### Option B: Manual Upload (Quick Start)
*Best for testing a single template via Zip upload without setting up a repo.*

1.  **Download:** Click **`<> Code`** > **Download ZIP**.
2.  **Extract:** Unzip the downloaded file. You will see the sub-folders (`angular`, `react`, etc.).
3.  **Prepare Upload:**
    * Choose the folder you want (e.g., `nextjs`).
    * **Zip THAT folder** individually (e.g., create `nextjs.zip`).
4.  **Build:** Go to [SwapLab.net](https://swaplab.net).
5.  Select **Capacitor Builder**, select **Platform**, select **Capacitor as the Framework Type**, upload your zip, and build.

---

## 🏗️ Infrastructure & Ecosystem


The build engine used to process these templates is part of the SwapLab Open Ecosystem. Our architecture prioritizes **Zero-Knowledge Storage** and **Just-In-Time (JIT) Security**.

<img width="2048" height="1117" alt="diagram" src="https://github.com/user-attachments/assets/fc878e6c-b39c-44d0-836f-328c05452163" />

You can audit our infrastructure components here:

* **🐳 Capacitor Core:** [View Public Base Image](https://github.com/swaplab-engine/capacitor-core)
* **🐳 Cordova Core:** [View Public Base Image](https://github.com/swaplab-engine/cordova-core)
* **📦 Build Packages:** [View Engine Images Registry](https://github.com/orgs/swaplab-engine/packages)
* **⚙️ Workflow Templates:** [View Integration .yml Files](https://github.com/swaplab-engine/workflow-templates)

---

## 🔗 Legal & Support

By using this service, you agree to our policies regarding repository access and data handling.

* **Repository Access:** [Permissions Explained](https://swaplab.net/privacy-policy/repository-permissions.html)
* **Terms & Conditions:** [Read Terms](https://swaplab.net/privacy-policy/terms-and-conditions.html)
* **Privacy Policy:** [Read Policy](https://swaplab.net/privacy-policy/privacy-policy.html)

---

## 🙏 Credits & Acknowledgements

These templates are based on excellent open-source work from the community. We have updated dependencies (Capacitor 7, Gradle 8) and hardened security settings for enterprise use.

We gratefully acknowledge the original authors:

| Framework | Original Author | Source Repository |
| :--- | :--- | :--- |
| **Angular** | **nicorac** | [ionic-capacitor-angular-template](https://github.com/nicorac/ionic-capacitor-angular-template) |
| **React** | **Mohit-wednesday** | [react-vite-capacitor](https://github.com/Mohit-wednesday/react-vite-capacitor) |
| **SolidJS** | **ionic-team** | [capacitor-solidjs-templates](https://github.com/ionic-team/capacitor-solidjs-templates) |
| **Next.js** | **mlynch** | [nextjs-tailwind-ionic-capacitor-starter](https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter) |

---
<p align="center">
  Maintained by <b>SwapLab Engineering Team</b>
</p>