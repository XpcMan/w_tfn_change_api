const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const path = require('path');
const ejs = require('ejs');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.set('views','views');

const PORT = 3000;

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use('/phone_number',userRoutes);

app.get('/',(req,res)=>{
    res.render("index");
})

app.listen(PORT, ()=>{
    console.log('server running');
});