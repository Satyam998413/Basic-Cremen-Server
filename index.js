// Import packages
const express = require("express");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.get("/", async (req, res, next) => {
    return res.status(200).json({
      title: "Express Testing",
      message: "The app is working properly!",
    });
  });

// connection
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to port ${port}`));
