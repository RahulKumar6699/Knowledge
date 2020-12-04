const { constants } = require('buffer');
const express = require('express');
const app = express();
var path = require('path');
app.use("/", express.static(path.join(__dirname,"public")));

app.get('/',(req, res) => {
    res.writeHead(200);
    res.end('sdfsdfsdffsd', 'utf8');
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log("Listening to port: "+port);
});