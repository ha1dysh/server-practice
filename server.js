const mongoose = require('mongoose');
const app = require('./src/app');

const { MONGO_URL, PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log('mongo connected... server running...'));
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
