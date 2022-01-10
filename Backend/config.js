export default  {
  database: 'mongodb+srv://Lucky:Lucky@7863@chat.0uiq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  server: {
    port: 8888,
    host: 'localhost',
  },
  jwt: {
    secret: 'ChatApp',
    expiresIn: '1d',
  },
};
