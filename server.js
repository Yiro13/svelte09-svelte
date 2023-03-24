import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
