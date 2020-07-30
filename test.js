const express = require("express");
const path = require("path");
const {everyThird} = require("./third")

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Please POST a string to /test in the following JSON format: {"string_to_cut": "Your response here"}')
});

app.post("/test", (req, res) => {
  let string_to_cut = req.body.string_to_cut;
  let cutString = everyThird(string_to_cut);
  let result = {"return_string": cutString};
  res.json(result);
  res.status(201);
  // res.end();
})



// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
