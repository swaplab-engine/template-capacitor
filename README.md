# SwapLab: Capacitor Templates (Monorepo)

SwapLab acts strictly as a Digital Bridge (Trigger).

![SwapLab Certified](https://img.shields.io/badge/SwapLab-Certified-success)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Structure](https://img.shields.io/badge/Structure-Monorepo-orange)

This repository hosts a curated collection of production-ready starter templates for building Android & iOS apps using **Capacitor 7/8**.

We have modernized, sanitized, and pre-configured these popular community templates to ensure they work seamlessly with the [SwapLab Build Service](https://swaplab.net).

## 📂 Repository Structure

This repository is structured as a monorepo containing multiple framework options and the required GitHub Actions workflows:

    temp-capacitor/
    ├── .github/workflows/
    │   ├── swaplab-workflow-cache.yml
    │   └── swaplab-workflow-no-cache.yml
    ├── angular/
    ├── nextjs/
    ├── react/
    ├── solidjs/
    ├── .gitignore
    └── README.md

## 🚀 How to Test in 30 Seconds (Upload Method)

You can test any of these templates instantly without connecting your GitHub account:

1. **Download:** Click the green **`<> Code`** button at the top of this repository and select **Download ZIP**.
2. **Extract:** Unzip the downloaded file to your computer.
3. **Select Framework:** Open the extracted folder and locate the specific template you want to use (e.g., `nextjs`).
4. **Compress (Crucial Step):** Zip that specific project folder. 
   > **⚠️ IMPORTANT:** You must zip the **folder itself** (e.g., `nextjs.zip`). Do not go inside the folder and zip the internal files. The root of your `.zip` archive must be the project directory.
5. **Upload:** Go to [public.swaplab.net](https://public.swaplab.net) or [private.swaplab.net](https://private.swaplab.net), upload your `.zip` file, and trigger the build.

## 📖 Documentation

For advanced usage, repository connection instructions, and workflow configurations, please refer to our official documentation:
**[https://swaplab-private-docs.pages.dev](https://swaplab-private-docs.pages.dev)**