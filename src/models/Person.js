const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    name: String,
    lastName: String,
    salary: Number
});

module.exports = Person;
