# Chapter 1 – Introduction to Node.js

## What is Node.js?

Node.js is **not a programming language**.

- It is a **server-side runtime environment**
- It allows JavaScript to run **outside the browser**
- It is used to build **backend applications and APIs**

## Important Points About Node.js

- Node.js is **not a language**
- It is a **server environment**
- It can **connect to databases**
- Node.js code syntax is **very similar to JavaScript**
- Node.js is **free and open-source**
- Node.js is built on **Chrome’s V8 JavaScript engine**

---

## Why JavaScript Alone Cannot Connect to a Database

JavaScript mainly runs in the **browser**.

For security reasons:
- Browsers **cannot directly access databases**
- Database credentials must be protected

To connect JavaScript with a database, we need a **backend server**.

👉 **Node.js acts as that backend**, allowing:
- Database connections
- API creation
- Secure data handling

---

## What is V8 JavaScript Engine?

- V8 is an **open-source JavaScript engine**
- Developed by **Google**
- Written in **C++**
- Used in **Google Chrome** and **Node.js**

### Why V8 is fast?
- Uses **Just-In-Time (JIT) compilation**
- Converts JavaScript directly into **machine code**
- Includes garbage collection and modern JS support

This makes Node.js **fast and efficient**.

---

## Why Do We Use Node.js?

⭐ Node.js is commonly used for:
- Building **REST APIs**
- Backend for **web & mobile applications**
- Real-time applications (chat, notifications)

⭐ Advantages:
- Easy to learn if you know JavaScript
- Very fast and scalable
- Same language for frontend and backend
- Supports full-stack development

---

## History of Node.js

- **First released:** May 27, 2009
- **Creator:** Ryan Dahl
- Inspired by **event-driven, non-blocking I/O**

### About Node Versions
- Node follows **Semantic Versioning (SemVer)**
- Even-numbered versions are **LTS (Long Term Support)**
- New major versions are released regularly

---

## Is JavaScript and Node.js the Same?

❌ **No, they are not the same**, but they are related.

### Similarities
- Same JavaScript syntax
- Based on ECMAScript standards

### Differences

| Feature | JavaScript | Node.js |
|------|----------|--------|
| Type | Programming language | Runtime environment |
| Runs on | Browser | Server |
| Database | ❌ Cannot connect directly | ✅ Can connect |
| Usage | UI, DOM, browser logic | APIs, backend, server |
| Environment | Client-side | Server-side |

---

## Conclusion

- JavaScript is a **language**
- Node.js is a **runtime environment**
- Node.js allows JavaScript to work on the **server**
- Node.js enables database connections and backend logic
- Together, JavaScript + Node.js support **full-stack development**
