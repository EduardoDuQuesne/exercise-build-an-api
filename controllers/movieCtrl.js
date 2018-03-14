const { getAll, getOne } = require('../models/Movie');

module.exports.getAllMovies = (req, res, next) => {
    getAll()
    .then((movies) => {
        res.status(200).json(movies);
    })
    .catch((err) => {
        next(err);
    });
};

module.exports.getOneMovie = (req, res, next) => {
    console.log('PARAMS', req.params);
    getOne(req.params.movieName.replace("+", " "))
    .then((movie) => {
        res.status(200).json(movie);
    })
    .catch((err) => {
        next(err);
    });
};
