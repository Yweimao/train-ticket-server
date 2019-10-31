const express = require('express');
const app = express()
app.get('/', (request,response) => {
  response.send('hello express')
  response.end();
});

app.get('/rest', (req,res) => {
  res.json({
    result: 1,
    msg: 'hello world'
  })
})


app.listen(5000)
