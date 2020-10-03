let numberOfFilms;


function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели ?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели ?', '');

    }
}
//start();

let personMove = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

function remembeFilms() {
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
}
//remembeFilms();

function detectPersonLevel() {
    if (personMove.count < 10) {
        console.log('Посмотрите больше фильмов');
    } else if (personMove.count >= 10 && personMove.count < 30) {
        console.log('ВЫ любитель');
    } else if (personMove.count > 30) {
        console.log('вы батюшка киноман');
    }

}
//detectPersonLevel()

function showMyDB(hidden) {
    if (hidden == false) {
        console.log(personMove);
    }
}
showMyDB(personMove.private);

function writeGenres() {
    for (let i = 1; i <= 3; i++) {
        let gfilm = prompt(`Ваш любимый жанр под номером ? ${i}`, '');
        if (gfilm != '' && gfilm != null) {
            personMove.genres[i - 1] = gfilm;
        } else {
            i--;
        }

    }
}
writeGenres()