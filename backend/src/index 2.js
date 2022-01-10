const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 2000;

const userRoutes = require('./routes/user');
env.config();
mongoose.connect(
    "mongodb+srv://demo:dCMOlcENp7eNC3Bh@sample.uctx6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
useNewUrlParser: true,
useUnifiedTopology: true
 }
).then(() => {
console.log('database connected');
});

app.use(bodyParser());
app.use('/api',userRoutes); 
 
app.listen(PORT, () => {
console.log(`server is running on port ${PORT}`);  
});