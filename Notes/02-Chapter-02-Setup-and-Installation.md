# ⭐ Chapter 2 – Install and Setup Node.js

In this chapter, we will learn how to **install, verify, update Node.js**, understand **npm**, and explore **popular IDEs** used for Node.js development.

---

## ⚡ Method 1: Using the Installer (Windows)

1. Visit the official Node.js website and download the **.msi installer**
   according to your system (32-bit or 64-bit).
2. Double-click the downloaded `.msi` file to start the setup wizard.
3. Click **Next** to proceed.
4. Accept the **License Agreement** and click **Next**.
5. Choose the destination folder and click **Next**.
6. Select the features to install and click **Next**.
7. Click **Install** to begin installation.
8. Once completed, click **Finish**.

---

## ⚡ Method 2: Using a Package Manager

You can also install Node.js using a package manager.

### Popular package managers:
- **Chocolatey**
- **Scoop**
- **Winget**

Example (Chocolatey – Windows):

```bash
choco install nodejs
```

> ⚠️ Note: Installation commands may vary depending on the package manager.
Always refer to official documentation.

---

## ✅ Verifying the Installation

After installation, verify Node.js by running:

```bash
node -v
```

This command displays the installed Node.js version.

You can also check npm version:

```bash
npm -v
```

---

## 🔄 Updating Node.js

### Using Installer
1. Download the latest `.msi` installer from the official Node.js website.
2. Run the installer.
3. Follow the same steps as installation.

### Using Package Manager (Chocolatey)

```bash
choco upgrade nodejs
```

> ⚠️ Update commands may vary based on the package manager.

---

## ▶️ Running a Node.js Program

1. Open a text editor (Notepad / VS Code).
2. Write the following code:

```js
console.log("Hello, world!");
```

3. Save the file as `hello.js`.
4. Open terminal and navigate to the file location:

```bash
cd folder-name
```

5. Run the program:

```bash
node hello.js
```

Output:

```
Hello, world!
```

---

## ⭐ Install Node.js and npm

### What is npm?

- npm stands for **Node Package Manager**
- It manages packages used in Node.js projects
- Allows installing free packages from the **npm registry**
- Helps manage **dependencies, versions, and scripts**
- npm is installed automatically with Node.js

---

## 🧑‍💻 Popular IDEs for Node.js

### 1️⃣ Visual Studio Code (VS Code)

**Key Features:**
- Debugging
- IntelliSense
- Git integration
- Extensions marketplace
- Integrated terminal

**Why use it?**
- Free and open source
- Large community support
- Highly customizable

---

### 2️⃣ WebStorm

**Key Features:**
- Intelligent code completion
- Debugging and testing
- Refactoring tools
- Git integration

**Why use it?**
- Excellent for full-stack development
- Powerful Node.js support

> ⚠️ Paid IDE (Free trial available)

---

### 3️⃣ Atom

**Key Features:**
- Customizable UI
- Built-in Git support
- Package manager
- JavaScript & Node.js support

**Why use it?**
- Free and open source
- Highly customizable

> ⚠️ Slower performance for large projects

---

### 4️⃣ Sublime Text

**Key Features:**
- Lightweight and fast
- Multiple cursors
- Command palette
- Plugin ecosystem

**Why use it?**
- Very fast editor
- Highly customizable

> ⚠️ Paid editor (Free trial available)

---

## 📊 IDE Comparison

| IDE | Pros | Cons |
|----|-----|-----|
| VS Code | Free, large community, extensions | Can be resource heavy |
| WebStorm | Powerful Node.js support | Paid IDE |
| Atom | Customizable, open source | Slower performance |
| Sublime Text | Fast and lightweight | Paid editor |

---

## ✅ Summary

- Installed Node.js using installer or package manager
- Verified installation
- Updated Node.js
- Ran first Node.js program
- Learned about npm
- Explored popular Node.js IDEs

🎉 Node.js setup is now complete!
