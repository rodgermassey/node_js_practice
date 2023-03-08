const express = require('express')
const timeout = require('connect-timeout')

express().use(timeout(5000),(req,res,next)=>{
/* The function body below is empty to simulate a hanging request by doing nothing.  */
    // res.write('this request will time out in 5 seconds')
    // next('hello error')
})
// .use((req,res, next)=>{
//     res.end('I will not run after error')
//     next()
// })
.use((error,req,res,next)=>{
/* By default the connect-timeout throws 503 error to override it we can add an error handler. */
    if(req.timedout){//checking the req.timedout property to confirm whether the request has timedout or not
        res.statusCode=500
        res.end('I am the error handler.')
    }
    else {
        next(error)
    }
}).listen(8080)