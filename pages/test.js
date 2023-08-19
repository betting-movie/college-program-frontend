import { useEffect, useState } from "react";

export default function Test() {
  const [htmlCode, setHtmlCode] = useState("");
  const apiKey = "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";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const body = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "Create an html script for a website for with ideas below and keep all the styles inline",
      },
    ],
    temperature: 0.7,
  });

  const chatGPTData = () => {
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: headers,
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("deepak", data?.choices[0]?.message);
        setHtmlCode(data?.choices[0]?.message?.content);
      })
      .catch((error) => {
        console.log(error);
        // Handle any errors that occur during the request
      });
  };

  useEffect(() => {
    chatGPTData();
  }, []);

  const var1 = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js and MySQL Website</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  
    <header style="background-color: lightgreen; padding: 20px; color: white; text-align: center;">
      <h1>Node.js and MySQL Website</h1>
    </header>
  
    <main style="padding: 20px;">
      <section>
        <h2>Section 1: Node.js Fundamentals</h2>
        <ol>
          <li>Introduction to Node.js</li>
          <li>Setting up Node.js development environment</li>
          <li>Understanding modules and packages in Node.js</li>
          <li>Handling asynchronous operations with callbacks</li>
          <li>Promises and async/await in Node.js</li>
        </ol>
      </section>
  
      <section>
        <h2>Section 2: MySQL Database</h2>
        <ol>
          <li>Introduction to MySQL</li>
          <li>Installing and configuring MySQL</li>
          <li>Creating a MySQL database and tables</li>
          <li>CRUD operations with MySQL</li>
          <li>Joins and relationships in MySQL</li>
        </ol>
      </section>
  
      <section>
        <h2>Section 3: Node.js and MySQL Integration</h2>
        <ol>
          <li>Connecting Node.js with MySQL using the MySQL driver</li>
          <li>Executing basic CRUD operations with Node.js and MySQL</li>
          <li>Handling transactions and error handling in Node.js and MySQL</li>
          <li>Implementing queries with joins and relationships</li>
          <li>Securing your MySQL connection</li>
        </ol>
      </section>
  
      <section>
        <h2>Section 4: Deployment</h2>
        <ol>
          <li>Deployment options for Node.js applications</li>
          <li>Setting up a production environment for Node.js</li>
          <li>Configuring a web server (e.g., Nginx) for Node.js applications</li>
          <li>Managing application logs and error handling in production</li>
          <li>Continuous integration and deployment with tools like Docker and Kubernetes</li>
        </ol>
      </section>
  
      <section>
        <h2>Section 5: Advanced Topics</h2>
        <ol>
          <li>Performance optimization techniques for Node.js and MySQL</li>
          <li>Caching strategies with Node.js and MySQL</li>
          <li>Implementing authentication and authorization with Node.js and MySQL</li>
          <li>Real-time communication with Node.js and MySQL (e.g., using WebSockets)</li>
          <li>Scaling and load balancing Node.js applications with MySQL</li>
        </ol>
      </section>
    </main>
  
    <footer style="background-color: lightgreen; padding: 20px; color: white; text-align: center;">
      <p>&copy; 2023 Node.js and MySQL Website. All rights reserved.</p>
    </footer>
  
  </body>
  </html>
  
  `;
  return (
    <div className="App" style={{ maxWidth: "480px" }}>
      <div dangerouslySetInnerHTML={{ __html: `${htmlCode}` }} />
    </div>
  );
}
