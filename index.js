import express from 'express';
import routes from './src/routes/route.js'

const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express running on ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Server is on port ${PORT}`)
);