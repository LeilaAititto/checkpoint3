require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 8000

const albumRouter = require('./models/albumRoute')
const trackRouter = require('./models/trackRoute')

app.use('/api/album', albumRouter)
app.use('/api/track', trackRouter)

app.listen(port, (err) => {
    if (err) {
        console.error("Something bad happened");
    } else {
        console.log(`Server is listening on ${port}`);
    }
});