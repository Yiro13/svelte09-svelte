import express from 'express';
const path = import('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});