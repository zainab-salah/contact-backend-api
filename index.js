const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv = require("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json()); // parse data stream from the client
app.use("/api/contacts", require("./routes/contactsRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});
