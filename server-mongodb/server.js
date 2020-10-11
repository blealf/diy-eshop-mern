const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http);

const chalk = require('chalk');
const log = console.log;

const bodyParser = require('body-parser');
const cors = require('cors');

const expressSession = require('express-session');
const passport = require('./app/passport/setup');

const mongoose = require('mongoose');
const db = require('./app/models');
const MongoStore = require('connect-mongo')(expressSession);

db.mongoose.connect(db.url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    log(chalk.blue('connected to db'));
  })
  .catch((error) => {
    log(chalk.redBright('Cannot connect to database', error));
    process.exit();
  });

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  expressSession({
    secret: 'eshop-secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./app/routes/auth')(app);
require('./app/routes/user.routes')(app);

require('./app/routes/category.routes')(app);
require('./app/routes/subcategory.routes')(app);

require('./app/routes/product.routes')(app);
require('./app/routes/order.routes')(app);
require('./app/routes/wishlists.routes')(app);
require('./app/routes/review.routes')(app);


const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DIY eshop' });
});

// app.listen(PORT, () => {
//   log(chalk.yellowBright(`Server is running on port ${PORT}`))
// })

// Socket.io
io.on('connection', (socket) => {
  log(chalk.bg-green('a user connected'));
  socket.on('disconnect', () => {
    log(chalk.bg-red('user disconnected'));
  });
});

http.listen(PORT, () => {
  log(chalk.yellowBright(`Listening on port ${PORT}`));
});
