// Import packages
const express = require("express");

// Middlewares
const app = express();
app.use(express.json());



// connection
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to port ${port}`));
