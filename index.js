const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://localhost'
}));


app.post('/bolike-vente', (req, res) => {
  console.log('Got body:', req.body);
  res.sendStatus(200);
});

app.get('/', (req,res) => {
  res.send('Hello world');
})

app.listen(50000, () => {
  console.log('Server listening on port 50000');
});