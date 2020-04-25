module.exports = (req, res) => {
  const { body = {}} = req;
  console.log('req.body', body);
  const { message = {} } = body;
  const { chat = {} } = message;
  res.json({
    body: {
        chat_id: chat.id,
        text: "Hello world!!!"
    }
  })
}
