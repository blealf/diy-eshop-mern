const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const chalk = require('chalk');
const log = console.log;
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSession = require('express-session');
const passport = require('./app/passport/setup');

// Database Mongoose
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
  origin: ['https://diy-eshop-mern.herokuapp.com', 'http://localhost:3000'],
};
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", ['https://diy-eshop-mern.herokuapp.com', 'http://localhost:3000']); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  
  // const allowedOrigins = ['http://localhost:3000','https://diy-eshop-mern.herokuapp.com'];
  // const origin = req.header.origin;
  // if (allowedOrigins.includes(origin)){
  //   res.setHeader('Access-Control-Allow-Origin', origin);
  // }
  
  // res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // res.header('Access-Control-Allow-Credentials', true);
  // return next();
});

// Middlewares
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

// Routes
require('./app/routes/auth')(app);
require('./app/routes/user.routes')(app);

require('./app/routes/product.routes')(app);
require('./app/routes/order.routes')(app);
require('./app/routes/wishlists.routes')(app);


// App
const PORT = process.env.PORT || 3001;
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to DIY eshop' });
// });

// if (process.env.NODE_ENV === 'production') {           
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
// }

// Socket.io
io.on('connection', (socket) => {
  // eslint-disable-next-line no-undef
  log(chalk.bg-green('a user connected'));
  socket.on('disconnect', () => {
    // eslint-disable-next-line no-undef
    log(chalk.bg-red('user disconnected'));
  });
});

http.listen(PORT, () => {
  log(chalk.yellowBright(`Listening on port ${PORT}`));
  // log(performance.now())
});
// app.listen(PORT, () => {
//   log(chalk.yellowBright(`Server is running on port ${PORT}`))
// })