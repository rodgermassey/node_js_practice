const express = require('express')
const bodyParser = require('body-parser')

express().use(bodyParser()).use((req,res,next)=>{
    if(req.body.foo){
        res.end(req.body.foo)
    }
    else{
        res.end('Foo not present in this body')
    }
}).use((error, req, res, next)=>{
    res.end('Invalid body')
})
.listen(8080)