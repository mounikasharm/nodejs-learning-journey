# 🌐 Client Side vs Server Side (Node.js Basics)

<p align="center">
  <img src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" width="75%" style="border-radius:12px"/>
</p>

---

## ⭐ What are Client Side and Server Side?

### 🧑‍💻 Client Side
Client-side code runs **inside the user’s browser**.

📌 Technologies used:
- HTML – structure
- CSS – styling
- JavaScript – interactivity
- Fetch / AJAX – API calls

💡 Client-side handles **UI and user interaction**.

---

### 🖥️ Server Side
Server-side code runs **on a server**, not in the browser.

📌 Responsibilities:
- Handle client requests
- Connect to databases
- Authentication & authorization
- Business logic

👉 Common server-side technology:
- **:contentReference[oaicite:0]{index=0}**

---

### 🔁 Client–Server Flow

<p align="center">
  <img src="https://www.guru99.com/images/1/020819_0500_ClientServe1.png" width="80%" style="border-radius:10px"/>
</p>

---

### 📩 Real-World Example

📧 **:contentReference[oaicite:1]{index=1}**

- Client Side:
  - Displays inbox UI
  - Sends request when you open mail
- Server Side:
  - Verifies user
  - Fetches emails from database
  - Sends data back to browser

---

## ⭐ How does Node.js use JavaScript?

<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:1100/1*Yh8ZKJg7ZpPpXcT2m8V1Nw.png" width="85%" style="border-radius:12px"/>
</p>

👉 **:contentReference[oaicite:2]{index=2}** allows JavaScript to run **outside the browser**.

### 🔥 Behind the scenes
- Uses **:contentReference[oaicite:3]{index=3}**
- Converts JavaScript into machine code
- Provides fast execution

🧠 Node.js was created by **:contentReference[oaicite:4]{index=4}** using the V8 engine.

---

### 🧪 Simple Node.js Example

> ⚠️ Don’t worry if you don’t understand this yet — we’ll break it down later 😊

```js
const http = require('http'); // Import HTTP module

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, World!');
  res.end();
});

server.listen(3000); // Server runs on port 3000
