const express = require('express')

express().use((req, res, next)=>{
    console.log('cookie in client req:',req.headers['cookie'])
    res.cookie('foo',123)
    res.end('just sent a cookie')
}).listen(8080)