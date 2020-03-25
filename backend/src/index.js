const express = require('express');

const cors = require('cors');
const routes = express.Router();


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//console.log(routes);

app.listen(3333);