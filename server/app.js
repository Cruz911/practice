const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const port = process.env.PORT || 4000

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
  });

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})