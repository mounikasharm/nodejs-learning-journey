# Chapter 03: Writing Your First Node.js Script

## Checking Node.js Version
If Node.js is installed on your computer, open the terminal and run:

```bash
node -v


This command shows the installed Node.js version.

To start the Node.js REPL (Read-Eval-Print-Loop), type:

node

Node.js REPL (Read-Eval-Print-Loop)

REPL allows you to execute JavaScript directly in the terminal.

console.log("Hello World");


Output:

Hello World

Variable Example
var a = 10;
console.log(a);


Output:

10
undefined


undefined appears because assigning a value does not return anything.

Mathematical Operation
var a = 10;
var b = 20;
console.log(a + b);


Output:

30

Creating Your First Node.js File

Create a folder named nodeJs

Open it in VS Code using:

code .


Create a file named index.js

Add this code:

console.log("Hello World");

Running the Node.js Script

In VS Code terminal, run:

node index.js


Output:

Hello World

Understanding Node.js

Node.js:

is NOT a programming language

is a runtime environment

runs JavaScript outside the browser

is built on the V8 JavaScript engine

Console in Node.js

Node.js provides a built-in console module:

console.log()

console.error()

console.warn()

It works similarly to the browser console, but outputs to the terminal.

Summary

Checked Node.js installation

Used Node.js REPL

Created first Node.js file

Executed JavaScript using Node.js
