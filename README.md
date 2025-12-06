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


## 🚀 Build Support & Pricing

| Build Type | Availability |
| :--- | :--- |
| **Debug APK** | ✅ **Free Forever** (Unlimited, No Subscription) |
| **Release APK / AAB** | 🎁 **Free PROMO** (Ends Jan 1, 2026) |
| **Export Android Studio/Xcode** | 🎁 **Free PROMO** (Ends Jan 1, 2026) |


> [!TIP]
> **🛡️ Security & Trial Options (Zero-Trust)**
>
> If you are hesitant about uploading your **Keystore/Signing Keys** to a cloud service, you have a safe alternative:
> * **Local Signing:** Choose **`Export Android Studio`** or **`Export Xcode`** as your build type. We will compile the native project structure for you, and you can sign the final app locally on your own machine.
> * **Plugin Devs & Testing:** Use **`Debug APK`** (Unlimited/Free). It requires no keys and is perfect for testing **Capacitor/Cordova plugins** or evaluating the service without a subscription.


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


> [!WARNING]
> **⛔️ CRITICAL: DO NOT DELETE THE `.github/workflows` DIRECTORY**
>
> This directory is the **digital bridge** connecting your repository to the SwapLab Service.
> * **How it works:** SwapLab acts as the **Trigger**, but the build runs on **YOUR GitHub Account** using your Action Minutes.
> * **Consequence:** Removing these files will **sever the connection**, and the Service will be **unable to trigger** the build process.

---



## 📂 Available Templates

Choose your preferred framework below. Each folder contains a complete, isolated project.

| Framework | Folder Name | Stack Details |
| :--- | :--- | :--- |
| **Angular** | [`/angular`](./angular) | Ionic 8 + Angular 21+ |
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

Choose the method that suits your workflow. Both options utilize **your GitHub Action minutes** for the build execution.

### Option A: Repository Builder (CI/CD Automation)
*Best for automated builds directly from your GitHub repository.*

> **Requirement:** Since this repository is a **Monorepo** (containing multiple frameworks), you **must** specify which folder you want to build (e.g., `react`, `vue`, `angular`) to ensure the `.github` bridge is excluded from the artifact.

1.  **Create Repository:** Click **Use this template** (top right) > **Create a new repository** (Select **Private**).
2.  **Access Service:** Log in to **[repository.swaplab.net](https://repository.swaplab.net)**.
3.  **Start Build:**
    * Select your newly created repository.
    * Select **Capacitor** as the Framework Type.
    * **Project Folder Name:** ✍️ **ENTER FOLDER NAME** (e.g., `react`, `angular`, or `nextjs`).
    * *Critical:* **DO NOT** leave this empty. You must specify the specific framework folder you want to build.
    * Click **Build from Repository**.

### Option B: Capacitor Builder (Manual Upload)
*Best for quick builds via Zip upload. Also uses your GitHub Action minutes.*

1.  **Download:** Click **<> Code** > **Download ZIP**.
2.  **Extract & Prepare:**
    * Unzip the downloaded file.
    * Open the folder and choose your desired framework (e.g., open the `nextjs` folder).
    * **Zip** the contents of that specific folder (e.g., create `nextjs.zip`).
    * *Note:* Do not zip the entire monorepo; only zip the specific project folder you want to build.
3.  **Build:** Go to **[capacitor.swaplab.net](https://capacitor.swaplab.net)**.
4.  **Configure:**
    * Select **Capacitor** as the Framework Type.
    * Upload your specific project zip file.
    * Click **Build**.

    
---



## 🔐 Signing Production Builds (Repository Builder Only)

> **Important:** This section applies **ONLY** to users using **Option A (Repository Builder)**.
> If you are using Option B (Manual Upload), you do not need to configure these secrets.

To generate signed **Release APKs** or **AAB (Android App Bundle)** automatically via GitHub Actions, you **MUST** configure the following Secrets in your GitHub Repository settings.

### 1. Add Secrets to GitHub
Go to **Settings** > **Secrets and variables** > **Actions** > **New repository secret**.

**🛠️ Workflow Implementation Details:**
If you inspect the workflow file ([`both-workflow-repo-no-cache.yml`](https://github.com/swaplab-engine/template-capacitor/blob/main/.github/workflows/both-workflow-repo-no-cache.yml)), you will see exactly how these credentials are passed to the container:

| Secret Name | Description |
| :--- | :--- |
| `KEYSTORE_BASE64` | Your `.jks` or `.keystore` file converted to a Base64 string. |
| `KEYSTORE_PASSWORD` | The password for your Keystore. |
| `KEY_ALIAS` | The alias name of your key. |
| `KEY_PASSWORD` | The password for your specific key alias. |

### 2. How to generate KEYSTORE_BASE64
You cannot upload the binary keystore file directly to GitHub Secrets. You must convert it to a text string first.

**Mac/Linux:**
```bash
base64 -i your-keystore.jks > base64-keystore.txt
# Open base64-keystore.txt, copy the content, and paste it into the Secret value.
```

**Windows (PowerShell):**
```bash
[Convert]::ToBase64String([IO.File]::ReadAllBytes("your-keystore.jks")) | Out-File base64-keystore.txt
```

### 3. 🔍 Transparency: How Secrets are Used (Secure & Ephemeral)
We prioritize security by using **Just-In-Time (JIT) Processing**.

Your signing keys and passwords are handled with strict isolation rules to ensure they cannot be leaked or retrieved:

1.  **Memory-Only:** Your secrets are processed entirely in **Volatile Memory (RAM)**.
2.  **No Disk IO:** We strictly **do not** write your passwords to any persistent configuration files or logs on the server.
3.  **Zero Trace:** The build environment is ephemeral. Once the build process finishes, the isolated container is immediately destroyed, wiping all data from memory.

```yaml
# From the .yml workflow (Inputs):
-e INPUT_KEYSTORE_BASE64=${{ secrets.KEYSTORE_BASE64 }} \
-e INPUT_KEYSTORE_PASSWORD=${{ secrets.KEYSTORE_PASSWORD }} \
-e INPUT_KEY_ALIAS=${{ secrets.KEY_ALIAS }} \
-e INPUT_KEY_PASSWORD=${{ secrets.KEY_PASSWORD }} \
```
* **Security Note (Silent Mode):** To guarantee zero leakage, the GitHub Actions log output is intentionally **restricted**.
    * **Where to watch:** A secure, sanitized log stream is transmitted exclusively to your **SwapLab Live Dashboard**.



---


## 📺 Video Tutorials

Visual learner? Watch our step-by-step guides directly on YouTube.

* **🎥 [SwapLab GitHub Sign In Steps](https://youtu.be/TbjFOGUjEFc)**
* **🚀 [SolidJS Capacitor (Revived): Build Release AAB from GitHub Repo](https://youtu.be/lotkGq1vom8)**
* **🚀 [Building Next.js with Capacitor, AAB release](https://youtu.be/5L_sCTmRHOc)**
* **🍎 [Cordova App Hello World: Build with Capacitor & Run in Xcode](https://youtu.be/uLzbHLBCLvA)**


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



<br>

<details>
<summary><strong>🔍 Transparency: GitHub Permissions & API Usage (Click to expand)</strong></summary>

<br>


<img width="431" height="741" alt="GitHub-Permissions" src="https://github.com/user-attachments/assets/cfdc1b35-517a-4b9e-9c29-300fd7b93aac" />


In this workflow, SwapLab acts as a **Digital Bridge (Trigger)**. It connects your SwapLab dashboard to your private GitHub Workspace, allowing you to trigger builds that run *inside* your own repository using standard GitHub Actions.

We believe in radical transparency. Here is the exact technical breakdown of why we request specific permissions and which GitHub APIs are triggered:

### 1. 🔑 Authentication
We use **Firebase Authentication (GitHub OAuth)** to verify your identity. We never see, store, or access your GitHub password.
* **Ref:** [Firebase GitHub Auth Documentation](https://firebase.google.com/docs/auth/web/github-auth)

### 2. ⚡ Workflows (Actions: Write)
**Why it's required:**
To act as a "Remote Control" for your build button. This allows the SwapLab Dashboard to start a build or cancel a hanging process.

**API Endpoints Used:**
* **Trigger Build:** `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`
* **Cancel Build:** `POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`
* **Ref:** [GitHub: Manually run a workflow](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow)

### 3. 📂 Contents (Read & Write)
**Why it's required:** `repository.swaplab.net`

* **(Read) To Check Out Code:**
    This allows the GitHub Actions runner to securely `checkout` your source code into the temporary, isolated build environment so it can be compiled.
* **(Write) To Upload Build Artifacts:**
    This permission supports our **Artifact Storage** feature. If you select the *"GitHub Repository (Releases)"* option, we use this permission to automatically create a new GitHub Release and upload your finished build file (e.g., `.apk` or `.aab`) as an asset to that release.

> **⚠️ Note:** We only use this permission to **Create** releases. We **do not** automate the deletion of your files. Full control to delete old releases or assets remains manually in your hands via:
> `https://github.com/{owner}/{repo}/releases`

**API Tool Used:**
We utilize the official GitHub CLI (`gh api`) within the workflow:
```bash
gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/OWNER/REPO/releases

```
**🛠️ Workflow Implementation Details:**
If you inspect the workflow file ([`both-workflow-repo-no-cache.yml`](https://github.com/swaplab-engine/template-capacitor/blob/main/.github/workflows/both-workflow-repo-no-cache.yml)), you will see exactly how these credentials are passed to the container:

* `-e GITHUB_SHA=${{ github.sha }}`: **Unique Release Code.**
    We use the unique Commit ID to tag the release version. This ensures you can trace every APK/AAB back to the exact code change that generated it.
* `-e GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }}`: **Automatic Token.**
    This is a temporary, auto-generated token provided by GitHub Actions. It is strictly used to authenticate the upload of the artifact back to your repository and expires immediately after the job finishes.



### 4. ℹ️ Metadata (Read-only)
**Why it's required:**
This is a default permission. We use it to read basic information about your repository (like its name and visibility) to display it correctly in your Dashboard list.

</details>

<br>


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



## 👨‍💻 About the Creator

SwapLab is built and maintained by **EMI (EMI-INDO)**, a dedicated developer in the Hybrid Mobile App ecosystem.

This service was built to solve the real-world build problems I faced while developing plugins and games.

* **Cordova Plugins:** I maintain various open-source [Cordova Plugins on GitHub](https://github.com/EMI-INDO?tab=repositories).
* **Game Assets:** Verified seller of [Construct 3 Addons](https://www.construct.net/en/game-assets/users/emiindo-378213).
* **Community:** Active member of the [Construct Community Forums](https://www.construct.net/en/forum).



---
<p align="center">
  Maintained by <b>SwapLab Engineering Team</b>
</p>
