import 'module-alias/register';
import express from 'express';
import { greeterRouter, motusRouter } from '@controllers/';

export const app = express();
const port = 8080; // default port to listen

app.use('/api', [greeterRouter, motusRouter]);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
