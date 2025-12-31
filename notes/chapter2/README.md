# 🌐 Client Side vs Server Side (Node.js Basics)

<p align="center">
  <img src="https://media.giphy.com/media/jmYJF3hGctoOI/giphy.gif" width="75%" style="border-radius:12px"/>
</p>

---

## ⭐ What are Client Side and Server Side?

### 🧑‍💻 Client Side
Client-side code runs **inside the user’s browser**.

📌 Examples:
- HTML – structure
- CSS – styling
- JavaScript – interactivity
- Fetching data using AJAX / Fetch API

💡 Client-side is responsible for **what users see and interact with**.

---

### 🖥️ Server Side
Server-side code runs **on a server**.

📌 Examples:
- Handling requests
- Connecting to databases
- Authentication & authorization
- Business logic

👉 **:contentReference[oaicite:0]{index=0}** is commonly used on the server side.

---

### 📩 Real-World Example

📧 **:contentReference[oaicite:1]{index=1}**

- Client side:
  - Loads UI
  - User clicks “Inbox”
- Server side:
  - Verifies user
  - Fetches emails from database
  - Sends data back to browser

---

## ⭐ How does Node.js use JavaScript?

<p align="center">
  <img src="https://user-images.githubusercontent.com/97989643/224650492-61a83921-b8a7-46e6-99bc-cf05dea143bc.png" width="80%" style="border-radius:12px"/>
</p>

👉 **:contentReference[oaicite:2]{index=2}** allows JavaScript to run **outside the browser**.

### 🔥 How?
- Node.js uses **:contentReference[oaicite:3]{index=3}**
- V8 compiles JavaScript directly into machine code
- This makes Node.js **fast and efficient**

🧠 Node.js was created by **:contentReference[oaicite:4]{index=4}**, using the V8 engine.

---

### 🧪 Simple Node.js Example

> ⚠️ Don’t worry if you don’t understand this now — we’ll explain it later 😊

```js
const http = require('http'); // Import HTTP module

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, World!');
  res.end();
});

server.listen(3000); // Server runs on port 3000
