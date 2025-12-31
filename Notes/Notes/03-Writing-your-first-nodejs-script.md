# ⭐ Chapter 3 – First Node.js Script

In this chapter, we will learn how to write and execute our **first Node.js script** and understand how Node.js works outside the browser.

---

## 🔍 Check Node.js Installation

If Node.js is installed, you can check the version by running the following command in your terminal:

```bash
node -v
```

This command displays the installed **Node.js version**.

---

## 🧪 Node.js REPL

REPL stands for **Read – Eval – Print – Loop**.  
It allows you to execute JavaScript code interactively.

Start the REPL by typing:

```bash
node
```

---

## 👋 Hello World in REPL

Inside the REPL, type the following command and press Enter:

```js
console.log("Hello World");
```

Output:

```
Hello World
```

---

## 📦 Variable Example

```js
var a = 10;
console.log(a);
```

Output:

```
10
undefined
```

### ❓ Why does `undefined` appear?

- Variable assignment does **not return any value**
- `console.log(a)` prints the value of variable `a`

---

## ➕ Mathematical Operation in REPL

```js
var a = 10;
var b = 20;
console.log(a + b);
```

Output:

```
30
```

---

## 📁 Creating Your First Node.js File

1. Create a folder named `nodeJs`
2. Open **Command Prompt / Terminal** inside that folder
3. Open the folder in VS Code:

```bash
code .
```

4. Create a file named `index.js`
5. Add the following code:

```js
console.log("Hello World");
```

---

## ▶️ Running the Node.js Script

Open the VS Code terminal and run:

```bash
node index.js
```

Output:

```
Hello World
```

---

## 🖥 Is console.log() Same in Browser and Node.js?

Yes, the syntax is the same, but internally it works differently.

### 🔹 In Node.js:
- `console.log()` is provided by the **console module**
- Output is written to:
  - `process.stdout`
  - `process.stderr`

### Common console methods:
- `console.log()`
- `console.error()`
- `console.warn()`

The implementation is similar to browsers, which is why the syntax feels the same.

---

## 📌 Key Notes

- Node.js is **not a programming language**
- It is a **runtime environment**
- Built on the **V8 JavaScript engine**
- Used to run JavaScript **outside the browser**
- Mainly used for **server-side applications**

---

## ✅ Summary

- Checked Node.js installation
- Used Node.js REPL
- Executed JavaScript commands
- Created and ran the first Node.js file
- Understood how `console.log()` works

🎉 You have successfully written your **first Node.js script**
