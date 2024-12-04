const express = require('express');
const cors = require('cors');
require('./config/connect');
const heroRoute = require('./routes/hero.route');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/hero',heroRoute);





app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})