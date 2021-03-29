'user strict';

const router = express.Router();
const controller = require('./controllers/todo')
const express = require('express');

router.get('/',(req,res,next) =>{
    res.status(200).send({
        title:"APi",
        version:"0.0.1"
    });
});

module.exports = router