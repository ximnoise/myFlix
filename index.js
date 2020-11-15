const express = require('express');
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

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Movie API, please visit the docs!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/documentation', (req, res) => {
  res.sendFile('documentation.html', { root: __dirname });
})