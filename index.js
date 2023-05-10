require("dotenv").config();

const express = require("express");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
const userRouter = require("./routes/users");
const cors = require("cors");

// const { data } = require("./populate");
// const Product = require("./models/product");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Server is working");
});

app.use("/api/v1/products", productsRouter);
app.use("/api/v1/user", userRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`\n\nServer is up an running on PORT: ${port}\n\n`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
