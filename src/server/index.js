const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const api = require("./Api.js")
require("dotenv").config();
const {default :axios} = require("axios");
let resData = {};


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("dist"))

app.listen(8000, () => { console.log('Server listening on port: 8000') });


app.get('/', (req,res) => {
    res.sendFile('dist/index.html');
})


app.post('/', (req,res) => {
    
    const url = req.body.url;
    console.log("URL: ", url);

    axios.post(`
    https://api.meaningcloud.com/sentiment-2.1?key=${
    process.env.API_KEY}&url=${url}&lang=en`).then((response) => {

        let result = response.data;
        res.send({
            agreement: result.agreement,
            confidence: result.confidence,
            irony: result.irony,
            model: result.model,
            score_tag: result.score_tag
        })

    });
    
})



