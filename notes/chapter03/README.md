## 🧩 Node.js Installation Guide
A complete step-by-step guide to install, understand, and start working with Node.js.  
This README is designed for **students, freshers, and beginners**.

---

## 📌 What is Node.js?

**:contentReference[oaicite:0]{index=0}** is a JavaScript runtime environment that allows you to run JavaScript **outside the browser**.

It is commonly used to build:
- Backend servers
- REST APIs
- Real-time applications
- Full-stack applications

Node.js is built on **Chrome’s V8 JavaScript engine** and is:
- Fast
- Scalable
- Event-driven
- Non-blocking

---

## ⭐ Why Use Node.js?

- Uses **JavaScript everywhere**
- Handles multiple requests efficiently
- Large ecosystem of packages
- Perfect for APIs and real-time apps
- Widely used in industry

Companies using Node.js:
- Netflix
- Uber
- PayPal
- LinkedIn

---

## ⭐ Install and Setup Node.js

---

## ⚡ Method 1: Using Installer (Recommended)

1. Visit the official website  
   👉 https://nodejs.org/en/download/

2. Download the **LTS version** (`.msi` file).

3. Double-click the installer.

4. Click **Next** → Accept license → **Next**

5. Choose install location (default is fine).

6. Select features → **Next**

7. Click **Install**

8. Click **Finish**

✅ Node.js & npm will be installed together.

---

## ⚡ Method 2: Using Package Manager

### Windows
- Chocolatey
- Winget
- Scoop

Example (Chocolatey):
```bash
choco install nodejs
```
### ⚡ Verifying the Installation

To verify that Node.js is installed on your computer, open a terminal or command prompt and type `node -v`. This should display the version of Node.js that you have installed.
### ⚡ Updating Node.js

To update Node.js to the latest version, you can either download the latest installer from the Node.js website and run it or use a package manager to update it.
#### 📃 Using the Installer

- 1. Visit the official Node.js website [here](https://nodejs.org/en/download/) and download the latest `.msi` file according to your system environment (32-bit or 64-bit).
- 2. Run the Node.js setup wizard by double-clicking on the downloaded `.msi` file.
- 3. Follow the same steps as when installing Node.js for the first time.
#### 📃 Using a Package Manager

Open a terminal or command prompt and type in the command to update Node.js using your package manager of choice. For example, for Windows using Chocolatey, you can type `choco upgrade nodejs`.

> Note: The command to update Node.js may vary depending on your package manager. Refer to its documentation for more details.

### ⚡ Running a Node.js Program

To run a Node.js program, you need to create a file with the `.js` extension and write some JavaScript code in it.

- 1. Open a text editor such as Notepad or Visual Studio Code.
- 2. Type in some JavaScript code such as `console.log('Hello, world!')`.
- 3. Save the file with a `.js` extension such as `hello.js`.
- 4. Open a terminal or command prompt and navigate to the directory where `hello.js` is located using `cd` command.
- 5. Type `node hello.js` and press Enter.

This should print `Hello, world!` to the terminal or command prompt.






## ⭐ Install NPM and Node



### What is NPM?

> In simple words, `npm` controls the packages that you use in your `Node.js` projects. It lets you download and use free packages or modules from the npm registry, and also lets you publish and distribute your own packages or modules.
  - `npm` is a package manager for `Node.js`, which is a JavaScript runtime

  - `npm` lets you download and use free packages or modules from the npm registry

  - `npm` also lets you publish and distribute your own packages or modules

  - `npm` helps you manage the dependencies, versions, and scripts of your `Node.js` projects

  - `npm` is included when you install `Node.js` on your computer






## ⭐ Some IDE for Node Js




### 1. Visual Studio Code (VS Code)
- **Key Features:** Debugging, IntelliSense, Git integration, extensions marketplace, integrated terminal, code snippets, built-in JavaScript/TypeScript support.
- **Why Use It:** VS Code is a free, open-source, and highly customizable IDE that supports a wide range of programming languages including Node.js. It has a large and active community that creates and maintains a variety of extensions, making it a powerful tool for Node.js developers.
- **Download Link:** [Download VS Code](https://code.visualstudio.com/download)
- **Note:** VS Code also has a Node.js extension that provides additional features like auto-completion, debugging, and npm integration.

### 2. WebStorm
- **Key Features:** Refactoring, debugging, testing, code analysis, intelligent code completion, Git integration, integrated terminal.
- **Why Use It:** WebStorm is a powerful and user-friendly IDE that provides a range of features specifically designed for Node.js development. It also has built-in support for various web technologies like HTML, CSS, and JavaScript, making it a great choice for full-stack developers.
- **Download Link:** [Download WebStorm](https://www.jetbrains.com/webstorm/download/)
- **Note:** WebStorm is a paid IDE, but it offers a free trial period.

### 3. Atom
- **Key Features:** Customizable UI, Git integration, package manager, built-in JavaScript/Node.js support, multiple panes, code snippets.
- **Why Use It:** Atom is a free and open-source text editor that is highly customizable and has a thriving community of developers who contribute to its ecosystem of packages and plugins. It also has built-in support for Node.js, making it a great choice for Node.js developers.
- **Download Link:** [Download Atom](https://atom.io/)
- **Note:** Atom has a slower performance compared to other IDEs, especially when dealing with large projects.

### 4. Sublime Text
- **Key Features:** Multiple cursors, command palette, powerful search and replace, code snippets, Git integration, customizability.
- **Why Use It:** Sublime Text is a lightweight and fast text editor that is highly customizable and has a large library of plugins and packages. It has built-in support for JavaScript and Node.js, making it a popular choice among web developers.
- **Download Link:** [Download Sublime Text](https://www.sublimetext.com/)
- **Note:** Sublime Text is a paid text editor, but it offers a free trial period.

