const express = require('express');
const path=require('path');
const app =express();

app.get('/', (req,res,next)=>{
    res.send("Server is working")
})

const port = 8080;
 app.listen(port, ()=>{
     console.log(`server is listning on port: ${port}`)
 })

