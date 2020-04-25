var express = require("express");
var app = express();
var bodyParser = require("body-parser");
require("dotenv").config();
const axios = require("axios");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

let telegram_url = "https://api.telegram.org/bot" + process.env.TELEGRAM_API_TOKEN +"/sendMessage";

const sendMessage = (message, reply, res) => {
    axios.post(telegram_url, {
        chat_id: message.chat.id,
        text: reply
    }).then(response => {
        console.log("Message posted", response);
        res.end("ok");
    }).catch(error =>{
        console.log(error);
        res.end(error);
    });
};

app.post("/start_bot", function(req, res) {
    const { message } = req.body;
    let reply = "Welcome to telegram grocery items list bot";
    console.log('message', message);
    sendMessage(message,reply,res);
});

app.listen(3000, () => console.log("Telegram bot is listening on port 3000!"));
