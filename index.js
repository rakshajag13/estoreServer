const express = require("express");
const product = require("./routes/product");
const app = express();

const cors=require("cors");
app.use(cors());

app.use("/",product);
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
