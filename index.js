const express = require('express');
const morgan = require('morgan');
const app = express();

let topMovies = [
  {
    title: 'Star Wars',
    director: 'George Lucas'
  },
  {
    title: 'Lord of the Rings',
    director: 'Peter Jackson'
  },
  {
    title: 'The Hobbit',
    director: 'Peter Jackson'
  },
  {
    title: 'Ready Player One',
    director: 'Steven Spielberg'
  },
  {
    title: 'Harry Potter',
    director: 'Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates'
  },
  {
    title: 'It',
    director: 'Andy Muschietti'
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan'
  },
  {
    title: 'Fight Club',
    director: 'David Fincher'
  },
  {
    title: 'Deadpool 1 + 2',
    director: 'Tim Miller, David Leitch'
  },
  {
    title: 'Ghost in the Shell (1995)',
    director: 'Mamoru Oshii'
  }
];

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
  res.send('Successful POST request registering new user');
})

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