import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import routes from './src/routes/route.js'

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true
})
//

//bodyparser setup 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//

routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express running on ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Server is on port ${PORT}`)
);