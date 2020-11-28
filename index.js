const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myFlixDB', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Movie API, please visit the docs!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/movies/:title', (req, res) => {
  res.send('Successful GET request returning data on a single movie');
});

app.get('/movies/genres/:title', (req, res) => {
  res.send('Successful GET request returning data on a genre');
});

app.get('/movies/directors/:name', (req, res) => {
  res.send('Successful GET request returning data on a single director');
});

app.post('/users', (req, res) => {
  Users.findOne({ Username: req.body.Username })
  .then((user) => {
    if (user) {
      return res.status(400).send(req.body.Username + 'already exists');
    } else {
      Users.create({
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday
      })
      .then((user) => {
        res.status(201).json(user)
      })
      .catch((error) => {
        res.status(500).send('Error: ' + error);
      })
    }
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send('Error: ' + error);
  });
});

app.get('/users', (req, res) => {
  Users.find()
  .then((users) => {
    res.status(201).json(users);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});

app.put('/users/:username', (req, res) => {
  res.send('Successful PUT request updating information');
});

app.post('/users/:username/movies/:movieId', (req, res) => {
  res.send('Successful POST request adding movie with ID to favorite movie list');
});

app.delete('/users/:username/movies/:movieId', (req, res) => {
  res.send('Successful DELETE request removing movie with ID from favorite movie list');
});

app.delete('/users/:username', (req, res) => {
  res.send('Successful DELETE request removing user from database');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});