require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dataRouter=require("./routes/data")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ 
    origin: 'http://localhost:1234',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
}));
app.use(bodyParser.json());

app.use('/', dataRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
