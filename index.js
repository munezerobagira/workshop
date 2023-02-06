const express = require('express');
const app = express();
const posts = [];
const users = [];
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.post('/posts', (request, response) => {
  const { title, content } = request.body;
  posts.push({ title, content, id: posts.length + 1 });
  response.status(201).json({
    message: 'Post created',
  });
});
app.get('/posts', (request, response) => {
  response.status(200).json(posts);
});
app.get('/users', (request, response) => {
  response.status(200).json(users);
});
app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});
module.exports = app;
