# Chapter 2 – Setup and Installation of Node.js

## Method 1: Using the Installer (Windows)

1. Visit the official Node.js website:
   https://nodejs.org
2. Download the .msi installer according to your system architecture (32-bit or 64-bit).
3. Double-click the downloaded .msi file to start the setup wizard.
4. Click Next to proceed.
5. Accept the License Agreement and click Next.
6. Choose the destination folder and click Next.
7. Select the required features (default is recommended).
8. Click Install to begin the installation.
9. After installation, click Finish.

npm (Node Package Manager) is installed automatically with Node.js.

---

## Method 2: Using a Package Manager

You can also install Node.js using a package manager.

Popular package managers for Windows:
- Chocolatey
- Scoop
- Winget

Example using Chocolatey:
```bash
choco install nodejs
Verifying the Installation

Open Command Prompt or Terminal and run:

node -v
npm -v


If version numbers are displayed, Node.js and npm are installed successfully.
Updating Node.js
Using Installer

Download the latest .msi file from the Node.js website.

Run the installer.

Follow the same steps as a fresh installation.

Using Package Manager

Example using Chocolatey:

choco upgrade nodejs


Note: Update commands depend on the package manager.Running a Node.js Program

Open a text editor (Notepad or VS Code).

Write the following code:

console.log("Hello, world!");


Save the file as hello.js.

Open terminal or command prompt.

Navigate to the file location using:

cd folder-path


Run the program:

node hello.js


Output:

Hello, world!

Install Node.js and npm
What is npm?

npm (Node Package Manager) manages packages used in Node.js projects.

Downloads and installs free packages from npm registry

Manages dependencies and versions

Runs project scripts

Allows publishing packages

npm is included when Node.js is installed.

IDEs for Node.js Development
Visual Studio Code (VS Code)

Free and open source

Debugging and IntelliSense

Git integration

Integrated terminal

Extensions support

WebStorm

Powerful IDE for Node.js

Intelligent code completion

Debugging and testing tools

Paid IDE (free trial available)

Atom

Free and open source

Highly customizable

Git integration

Built-in Node.js support

Sublime Text

Lightweight and fast

Multiple cursors

Command palette

Paid (free trial available)


