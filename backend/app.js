const express = require('express');
const { urlencoded } = require('express');
const jwt = require('jsonwebtoken');

const app = express();

//config
app.set('port', 5000);

//meddelwares
app.use(express.json());
app.use(express.urlencoded({ectended: false}));

//routers
app.post("/api/auth",(req, res) => {
    //este seria mi codigo de autenticacion
    const codigo = {id: 1};
    const token = jwt.sign({codigo}, process.env.TOKEN ? process.env.TOKEN : 'token');    
    res.send(token);
});

app.use("/api/list", require("./routes/product"));

module.exports = app;