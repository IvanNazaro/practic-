

let personMove = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personMove.count = +prompt('сколько фильмов вы уже посмотрели ?', '');
        while (personMove.count  == '' || personMove.count  == null || isNaN(personMove.count )) {
            personMove.count  = +prompt('сколько фильмов вы уже посмотрели ?', '');
    
        }
    },
    remembeFilms: function() {
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
    },
   detectPersonLevel: function() {
        if (personMove.count < 10) {
            console.log('Посмотрите больше фильмов');
        } else if (personMove.count >= 10 && personMove.count < 30) {
            console.log('ВЫ любитель');
        } else if (personMove.count > 30) {
            console.log('вы батюшка киноман');
        }
    
    },
    showMyDB: function (hidden) {
        if (hidden == false) {
            console.log(personMove);
        }
    },toggleVersibleMyDB:function(){
        if(personMove.private ){
            personMove.private = false;
        }else{
            personMove.private = true;
        }
    },
    writeGenres:function() {
        for (let i = 1; i <= 3; i++) {
            let gfilm = prompt(`Ваш любимый жанр под номером ? ${i}`, '').toLowerCase();
            if (gfilm != '' && gfilm != null) {
                personMove.genres[i - 1] = gfilm;
            } else {
                console.log('Вы ввели некоректные данные');
                i--;
          }
    
        }
        personMove.genres.forEach((item , i) => {
            console.log(`Любимый жанр ${i + 1} - Это ${item}`);
   });
    },
    
};
console.log(personMove.showMyDB());


