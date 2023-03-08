const express = require('express')
const timeout = require('connect-timeout')

const haltOnTimeout = (req, res, next)=>{
    console.log('im running')
    if(!req.timedout){
        next()
    }
}
/* According to me the haltOnTimeout function isn't doing much as the server itself will not call 
    the middlewares that follow after the connect-timeout throws an error. */
express().use(timeout(1000)).use((req, res, next)=>{
    setTimeout(()=>{
        next()
    },4000)
}).use(haltOnTimeout).use((req,res,end)=>{
    res.end('DONE')
}).listen(8080)