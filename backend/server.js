const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "You've Landed" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

const mapRoutes = require('./routes/mapRoutes');
app.use('/map', mapRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

