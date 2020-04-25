module.exports = (req, res) => {
  console.log('req', req);
  const { body = {}} = req;
  const { message = {} } = body;
  const { chat = {} } = message;
  res.json({
    body: {
        chat_id: chat.id,
        text: "Hello world!!!"
    }
  })
}
