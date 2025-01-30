const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Microservice Info</title>
      <meta charset="utf-8">
      <style>
        body {
          background-color: #f0f8ff;
          font-family: 'Arial', sans-serif;
          color: #333;
          text-align: center;
          padding: 50px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #ff4500;
        }
        p {
          margin: 10px 0;
        }
        footer {
          margin-top: 20px;
          color: #888;
          font-size: 0.9em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1> &#128075 Hello from cz-custom-microservice </h1>
        <p><strong>Date:</strong> <span id="date"></span></p>
        <p><strong>Time:</strong> <span id="time"></span></p>
        <footer>
          A special thanks to CloudZenia for guidance </br>
          Developed by Adarsh Vyas &#128519
        <div>
            <a href="https://www.linkedin.com/in/adarsh-vyas" target="_blank"><img src="https://img.icons8.com/?size=30&id=13930&format=png&color=000000" alt="LinkedIn"></a>
            <a href="https://github.com/adarshvyas99/cz-custom-microservice" target="_blank"><img src="https://img.icons8.com/?size=30&id=63777&format=png&color=000000" alt="GitHub"></a>
        </div>
        </footer>
      </div>
      <script>
        function updateDateTime() {
          const now = new Date();
          document.getElementById('date').innerText = now.toDateString();
          document.getElementById('time').innerText = now.toTimeString();
        }
        setInterval(updateDateTime, 1000);
        updateDateTime(); // Initial call to display immediately
      </script>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});
