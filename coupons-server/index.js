const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3201;

app
  .use(cors())
  .use(express.json())
  .use(router);

app.listen(PORT, () => {
  console.log(`App running at: http://localhost:${PORT} 🦜🐈`);     //eslint-disable-line no-console
});