// Create web server
// npm install express
const express = require('express');
const app = express();
const port = 3000;
// npm install body-parser
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/comment', (req, res) => {
  console.log(req.body);
  res.send('Data is being processed');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Start the server
// node comment.js
// Open the browser and type http://localhost:3000/
// Type the comment in the text box and click on the submit button
// Open the command prompt and check the console