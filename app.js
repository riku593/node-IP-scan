const express = require('express');
const navigator = require('navigator');
const PORT = process.env.PORT || 8766;
const geoip = require('fast-geoip');

const app = express ();
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
  });


app.get("/location", async function getLoc(req, res) {
  let address1 = req.ip.replace(/^.*:/,'');
  let geo1 = await geoip.lookup(address1);
  res.send("Your location is "+ JSON.stringify(geo1,(',',"\n"),4));
  console.log(JSON.stringify(geo1,null,4));
});

app.get("/", function (req,res) {
  let address = req.ip.replace(/^.*:/, '');
  console.log(address);
  res.send("Your IP is "+ address);
  
});  




app.get("/status", (request, response) => {
  const status = {
     "Status": "Running"
  };
  
  response.send(status);
});
