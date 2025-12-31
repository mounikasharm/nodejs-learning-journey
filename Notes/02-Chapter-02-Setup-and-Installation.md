# Chapter 2 – Setup and Installation of Node.js

## Introduction
Before starting Node.js development, we must install and configure Node.js on our system.  
Node.js setup allows JavaScript to run outside the browser and enables backend development.

---

## Method 1: Using the Installer (Windows)

1. Visit the official Node.js website:  
   https://nodejs.org
2. Download the `.msi` installer based on your system architecture (32-bit or 64-bit).
3. Double-click the downloaded `.msi` file to launch the setup wizard.
4. Click **Next** to continue.
5. Accept the **License Agreement** and click **Next**.
6. Choose the destination folder and click **Next**.
7. Select the required features (default settings are recommended).
8. Click **Install** to start the installation.
9. Once installation is complete, click **Finish**.

📌 npm (Node Package Manager) is installed automatically with Node.js.

---

## Method 2: Using a Package Manager

Node.js can also be installed using a package manager.

### Popular Package Managers (Windows)
- Chocolatey
- Scoop
- Winget

### Example: Installing Node.js using Chocolatey
```bash
choco install nodejs
Verifying the Installation

After installation, open Command Prompt or Terminal and run:node -v
npm -v
If version numbers are displayed, Node.js and npm are installed successfully.Updating Node.js
Method 1: Using Installer

Download the latest .msi file from the Node.js website.

Run the installer.

Follow the same steps as a fresh installation.

Method 2: Using Package Manager

Example using Chocolatey:choco upgrade nodejs
Running a Node.js Program

Open a text editor such as Notepad or Visual Studio Code.

Write the following code:console.log("Hello, world!");
Save the file as hello.js.

Open terminal or command prompt.

Navigate to the file location:cd folder-path
Run the program:
Output
Hello, world!
node hello.js
Installing Node.js and npm
What is npm?

npm (Node Package Manager) is a package manager for Node.js.

It allows you to:

Download and use free packages from the npm registry

Manage dependencies and versions

Run project scripts

Publish and distribute your own packages

📌 npm is included automatically when Node.js is installed.

IDEs and Text Editors for Node.js Development
Visual Studio Code (VS Code)

Free and open source

IntelliSense and debugging support

Git integration

Integrated terminal

Extensions marketplace

WebStorm

Powerful IDE for Node.js development

Intelligent code completion

Debugging and testing tools

Paid IDE (free trial available)

Atom

Free and open source

Highly customizable

Git integration

Built-in Node.js support

Slower performance for large projects

Sublime Text

Lightweight and fast

Multiple cursors

Command palette

Paid editor (free trial available)
