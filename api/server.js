import express from 'express';

// Initialize HTTP Server
const app = express();

app.get('/', (req, res) =>
  res.send('Hello World!')
)

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});