const express = require('express');
const personRoutes = require('../src/routes/person');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api', personRoutes);
};
