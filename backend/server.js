const express = require('express');
const cors = require('cors');
const path = require('path');
const expressSession = require('express-session');

// Google
const REACT_APP_GOOGLE_CLIENT_ID =
  'http://349715903171-rm59q64faelu1sivune89lktj8kf78s0.apps.googleusercontent.com';
const dotenv = require('dotenv');
dotenv.config();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(REACT_APP_GOOGLE_CLIENT_ID);

const app = express();
const http = require('http').createServer(app);

// session setup
const session = expressSession({
  secret: 'coding is amazing',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false},
});

// Express App Config
app.use(express.json({limit: '50mb'}));
// app.use(express.json());
app.use(session);
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  // Express serve static files on production environment
  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  // Configuring CORS
  const corsOptions = {
    // Make sure origin contains the url your frontend is running on
    origin: [
      'http://127.0.0.1:8080',
      'http://localhost:8080',
      'http://127.0.0.1:3000',
      'http://localhost:3000',
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

const authRoutes = require('./api/auth/auth.routes');
const userRoutes = require('./api/user/user.routes');
const boardRoutes = require('./api/board/board.routes');
const {connectSockets} = require('./services/socket.service');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/board', boardRoutes);
connectSockets(http, session);

app.post('/api/google-login', async (req, res) => {
  const {token, googleId} = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const {name, email, picture} = ticket.getPayload();
  // Todo: to send it to user auth

  res.json({name, email, picture, googleId});
});

// Make every server-side-route to match the index.html
// so when requesting http://localhost:3030/index.html/car/123 it will still respond with
// our SPA (single page app) (the index.html file) and allow vue-router to take it from there
app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const logger = require('./services/logger.service');
const port = process.env.PORT || 3030;

http.listen(port, () => {
  logger.info('Server is running on port: ' + port);
});
