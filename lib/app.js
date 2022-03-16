const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes

// Error handling & 404 middleware for when
// a request doesn't match any app routes

app.get('/', (req, res) => {
  res.send('Hit root route');
});

app.use('/api/v1/cats', require('./controllers/cats'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
