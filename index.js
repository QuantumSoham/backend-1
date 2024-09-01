require("dotenv").config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send("<h1 style=\"text-align:center\">Hey There<h1>")
})
app.listen(port1=process.env.PORT, () => {
    console.log(`Example app listening on: http://localhost:${port1}`);
})