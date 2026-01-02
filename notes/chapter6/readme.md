<p align="center">
  <img
    src="https://media.giphy.com/media/LMt9638dO8dftAjtco/giphy.gif"
    alt="Node.js Modules"
    width="420"
  />
</p>

---

# ⭐ Node.js Modules Overview

:contentReference[oaicite:0]{index=0} uses **modules** to organize code into reusable pieces.
Modules help keep applications **clean, maintainable, and scalable**.

---

## ⭐ Core Modules

<div style="background:#f6f8fa; padding:14px; border-left:4px solid #2ecc71; border-radius:6px;">

Core modules are **built into Node.js** and come with its installation.  
They provide basic functionalities like:

- 🌐 Creating HTTP servers → `http`
- 📁 File system handling → `fs`
- 🧭 File paths → `path`
- 🖥️ OS information → `os`
- 🧠 Binary data handling → `buffer`

These modules can be loaded using the `require()` function.

</div>

---

## ⭐ Global Modules

<div style="background:#f0f7ff; padding:14px; border-left:4px solid #3498db; border-radius:6px;">

Global modules are installed **system-wide**, so they can be used anywhere on your computer  
without importing them into a project.

Example: `nodemon`

</div>

```js
console.log("Hello World") 
// console.log is a global module
