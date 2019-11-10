var express = require("express");
var app = express();
var port = 3000;
var contract = require('./contract.js');

app.use(express.static("public"));
app.listen(port, () => {
 console.log("Server listening on port " + port)
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/addname", (req, res) => {
  res.send(req.body);

});

async function sendObject(){
  customerData = [];
  var x=0;
  var y = await contract.x.call().toNumber();
  for(var i=0;i<y;i++){
      const da = await contract.get(x);
      customerData.push(da);
      x=x+1;
  }
  app.get('/test',function(req,res,next) {
    res.json(customerData);
  })
  }

sendObject();
