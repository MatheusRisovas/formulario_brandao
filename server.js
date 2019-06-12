const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');

const app = express();
const port = process.env.PORT  || 5000;

app.use(body_parser.json());
app.use(cors());
app.use(body_parser.urlencoded({extended: false}));

const Users = require('./routes/Users');

app.use('/user',Users);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});