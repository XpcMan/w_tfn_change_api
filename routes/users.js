const express = require('express');

const router = express.Router();

const user = {
    phone_number:""
}

router.get('/',(req,res)=>{
    res.send(user);
})

router.post('/',(req,res)=>{
    user.phone_number = req.body.data;

    res.send('New Phone Number :<h1> '+user.phone_number+'</h1>');
})

module.exports =  router;
