const mongoose = require('mongoose');
const keys = require('./config/keys');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION Shuting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Sucessfully connected'))
  .catch((err) => console.log(err));

const app = require('./app');

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});
