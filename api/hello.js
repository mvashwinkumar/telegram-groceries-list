module.exports = (req, res) => {
  const { message = {} } = req.body;
  const { chat = {} } = message;
  res.json({
    body: {
        chat_id: chat.id,
        text: "Hello world!!!"
    }
  })
}
