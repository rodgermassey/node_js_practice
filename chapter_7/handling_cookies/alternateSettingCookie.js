const express = require('express')
const cookieParser = require('cookie-parser')

express().use(cookieParser()).use((req, res, next)=>{
    if(req.cookies.foo){
        console.log('The value of the foo cookie is', req.cookies.foo)
        res.clearCookie('foo')
        res.end('Cookie Already set therefore removing it!')
    }
    else{
        res.cookie('foo', Math.random()*10)
        res.end('Cookie was removed therefore setting it again')
    }
}).listen(8080)