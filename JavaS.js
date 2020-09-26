let numberOfFilms = +prompt('сколько фильмов вы уже посмотрели ?', '');

let personMove = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};
let a = prompt('Один из последних просмотреных фильмов', '');
let b = prompt('На сколько оценете его ?', '');
let c = prompt('Один из последних просмотреных фильмов', '');
let d = prompt('На сколько оценете его ?', '');

personMove.movies[a] = b;
personMove.movies[c] = d;


console.log(personMove.movies);