const axios = require("axios");

let telegram_url = "https://api.telegram.org/bot" + process.env.TELEGRAM_API_TOKEN +"/sendMessage";

const sendMessage = (message, reply, res) => {
  const { chat = {} } = message;
    axios.post(telegram_url, {
        chat_id: message.chat.id,
        text: reply
    }).then(() => {
        res.end("ok");
    }).catch(error =>{
        console.log(error);
        res.end(error);
    });
};

module.exports = (req, res) => {
  const { body = {}} = req;
  console.log('req.body', body);
  const { message = {} } = body;
  let reply = "Welcome to telegram grocery items list bot";
  sendMessage(message,reply,res);
}
