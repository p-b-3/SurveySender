const express = require("express");
app = express();

app.get("/", (req, res) => {
  res.send({ hi: "You!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
