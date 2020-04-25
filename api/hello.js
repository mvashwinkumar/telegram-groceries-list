module.exports = (req, res) => {
  const { body = {}} = req;
  console.log('req.body', body);
  console.log('process.env', process.env);
  const { message = {} } = body;
  const { chat = {} } = message;
  res.json({
        chat_id: chat.id,
        text: "Hello world!!!"
  })
}
