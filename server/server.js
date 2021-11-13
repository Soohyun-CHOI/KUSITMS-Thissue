const express = require("express");
const app = express();
const basic = require("./router/index");

const mongoose = require('mongoose');
const config = require("./config/key");

const connect = mongoose.connect(config.mongoURI,
    {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res)=> res.send('핫식스 아좌아좌빠이띵~'))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
    }
    
    const port = process.env.PORT || 5000
    
    app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
    });
