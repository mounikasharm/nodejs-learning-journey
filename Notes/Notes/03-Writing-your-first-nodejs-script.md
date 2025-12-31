# Chapter 3 – Writing Your First Node.js Script

Node.js allows us to run JavaScript code **outside the browser**.  
In this chapter, we will write and execute our **first Node.js program**.

---

## Check Node.js Installation

Before starting, make sure Node.js is installed on your system.

```bash
node -v
```

This command displays the **installed Node.js version**.

---

## Node.js REPL

REPL stands for **Read – Eval – Print – Loop**.  
It allows us to execute JavaScript code interactively.

```bash
node
```

---

## Hello World in REPL

```js
console.log("Hello World");
```

Output:
```
Hello World
```

---

## Working with Variables in REPL

```js
var a = 10;
console.log(a);
```

Output:
```
10
undefined
```

### Why `undefined` appears?
- Variable assignment does not return a value
- `console.log(a)` prints the value of `a`

---

## Performing Math Operations

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

## Creating Your First Node.js File

1. Create a folder named `nodeJs`
2. Open terminal inside the folder
3. Open VS Code:

```bash
code .
```

4. Create a file named `index.js`
5. Add the following code:

```js
console.log("Hello World");
```

---

## Running a Node.js Script

```bash
node index.js
```

Output:
```
Hello World
```

---

## About console.log()

- Works in both **browser** and **Node.js**
- Node.js has a built-in **console module**
- Writes output to `process.stdout` and `process.stderr`

Common methods:
- `console.log()`
- `console.error()`
- `console.warn()`

---

## Summary

- Checked Node.js installation
- Used Node.js REPL
- Executed JavaScript commands
- Created and ran the first Node.js file

✅ You have successfully written your **first Node.js script**
