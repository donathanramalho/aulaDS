const express = require('express');
require('dotenv').config();
const app = express();

require('./startup/db')(); // Conectar banco
require('./startup/router')(app); // Rodar o router

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
