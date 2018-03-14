const { getAll } = require('../models/Director');

module.exports.getDirectors = (req, res, next) => {
    console.log('Get Directors' );
    getAll()
    .then((direx) => {
        res.json(direx);
    })
    .catch((err) => next(err));
};