let numberOfFilms = +prompt('сколько фильмов вы уже посмотрели ?', '');

let personMove = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотреных фильмов', '');
    let b = prompt('На сколько оценете его ?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personMove.movies[a] = b;
        console.log('DONE');
    } else {
        console.log('Error');
        i--;
    }

}
if (personMove.count < 10) {
    console.log('Посмотрите больше фильмов');
} else if (personMove.count >= 10 && personMove.count < 30) {
    console.log('ВЫ любитель');
} else if (personMove.count > 30) {
    console.log('вы батюшка киноман');
}

console.log(personMove.count);