const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all(
        `SELECT movies.*, directors.name "Director"
        FROM Movies
        JOIN Directors
        ON movies.director_id = directors.dir_id`, (err, movies) => {
            if (err) return reject(err);
            resolve(movies);
        });
    });
};

module.exports.getOne = (input) => {
    console.log('GET ONE CHECK:',input);
    return new Promise((resolve, reject) => {
        db.all(
        `SELECT m.*
        FROM Movies m
        WHERE m.name like "${input}"`, (err, movie) => {
            if (err) return reject(err);
            resolve(movie);
        });
    });
};