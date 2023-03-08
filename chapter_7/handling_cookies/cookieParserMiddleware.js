const express = require('express')
const cookieParser = require('cookie-parser')

/* If a cookie named foo is already set in the browser then this server would always pick that value
    value of foo rather than resetting it with the new value as it would never go into the else block
*/
express().use(cookieParser()).use((req, res, next)=>{
    if(req.cookies.foo){
        console.log(req.cookies.foo)
        res.end('The cookie foo has already been set!')
    }
    else{
        res.cookie('foo',231)
        res.end('setting cookie')
    }
}).listen(8080)