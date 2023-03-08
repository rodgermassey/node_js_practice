/* cookie-session is used as to manage the data that is specific to the particular user in the cookie
    for e.g. if the user is logged in or not, but the problem with normal cookie is that it can only
    contain a string value, therefore in order to use a JS object with it we will have to use JSON string,
    This middleware generator helps us with this by converting req.session[propertyName] into JSON and
    supplying it as the cookie.
*/
const express = require('express')
const cookieSession = require('cookie-session')

express().use(cookieSession({
//Many other properties can be supplied to this cookieSession options object like :-
/* 1) Path 2) maxAge 3) httpOnly (true by Default) 4) signed (true by Default)*/ 
    keys: ['this is my secret key for signed cookie']
})).use('/increment',(req, res, next)=>{
    if(req.session.test){
        req.session.test++
    }else{
        req.session.test = 1
        req.session.a = 'hello'
    }
    res.end('Cookie Set '+req.session.test+' '+ req.session.a)
    next()
}).use('/reset',(req,res,next)=>{
    delete req.session.test //To delete a particular key from the cookie (session) object. 
    res.end('Cookie Reset '+ req.session.a)
    next()
}).use('/reset-cookie',(req,res,next)=>{
    req.session = null //To remove the entire cookie (session) object from the. 
    res.end('cookie removed ')
}).listen(8080)