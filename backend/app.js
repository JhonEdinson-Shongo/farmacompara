const express = require('express');
const { urlencoded } = require('express');

const app = express();

//config
app.set('port', 5000);

//meddelwares
app.use(express.json());
app.use(express.urlencoded({ectended: false}));

//routers