# SwapLab: React + Vite + Capacitor Starter

![SwapLab Certified](https://img.shields.io/badge/SwapLab-Certified-success)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

This is a production-ready starter template for building Android & iOS apps using React, Vite, and Capacitor 7. It has been pre-configured, sanitized, and tested to work seamlessly with the [SwapLab Build Service](https://capacitor.swaplab.net).

## 🚀 Features
* **Latest Tech:** Updated to Capacitor 7, React 18, Vite 5.
* **Android Ready:** Includes auto-configured Android platform (SDK 35).
* **Secure:** Pre-scanned and compliant with SwapLab security policies.

---


## ⚡ How to Build

To use this template, you must have a GitHub account and **Sign In** to the [SwapLab Dashboard](https://swaplab.net) to access the builder services.

### Option A: Manual Upload (Quick Start)
Best for quick testing. No repository setup required on your end.

1.  **Get the Code:** Click the **`<> Code`** button above and select **Download ZIP**.
2.  **Access Service:** Log in to [SwapLab.net](https://swaplab.net) using your GitHub account.
3.  **Select Builder:** From the main menu, select **Capacitor Builder**.
4.  **Upload & Build:**
    * Upload the `.zip` file you just downloaded.
    * Select "Capacitor" as the Framework Type.
    * Click "Upload and Build".

### Option B: CI/CD Automation (Repository Integration)
Best for continuous development using your own repository.

1.  **Create Repository:** Click **`Use this template`** to create a new repository in your GitHub account.
2.  **Add Workflow:** You need a connection file.
    * Go to **[SwapLab Workflow Templates](https://github.com/swaplab-engine/workflow-templates)**.
    * Copy the content of `capacitor-workflow-cache.yml`.
    * Create a file in your new repo at: `.github/workflows/capacitor-workflow-cache.yml`.
3.  **Access Service:** Log in to [SwapLab.net](https://swaplab.net) using your GitHub account.
    *(Your repositories are automatically connected upon login).*
4.  **Select Builder:** From the main menu, select **Repository Builder** (Builder Plus).
5.  **Start Build:**
    * Select "Capacitor" as the Framework Type.
    * In the "Project Folder Name" field, keep the default **`/`**.
    * Click "Build from Repository".

---

## 🏗️ Infrastructure & Transparency

At SwapLab, we believe in **Supply Chain Transparency**. The build engine used to process this template is based on our open-source core images. You can inspect the exact environment your code runs in:

* **🐳 Capacitor Core:** [View Public Base Image](https://github.com/swaplab-engine/capacitor-core)
* **🐳 Cordova Core:** [View Public Base Image](https://github.com/swaplab-engine/cordova-core)
* **📦 Build Packages:** [View Available Engine Images](https://github.com/orgs/swaplab-engine/packages)

Your project will be built using the publicly verifiable images listed above, ensuring no hidden dependencies or secret code injections in the runtime environment.

---

## 🙏 Credits & Attribution

This template is based on the excellent work by **Mohit-wednesday**.
Original Repository: [react-vite-capacitor](https://github.com/Mohit-wednesday/react-vite-capacitor)

We have modernized the dependencies, resolved security vulnerabilities, and updated the build configuration to meet 2025 standards.

---
<p align="center">
  Maintained by <b>SwapLab Engineering Team</b>
</p>