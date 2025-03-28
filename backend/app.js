const express = require('express');
const cors = require('cors');
const dictionaryRoutes = require('./routes/dictionaryRoutes');
require('dotenv').config({ path: '.env', vault: true });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/dictionary', dictionaryRoutes);

module.exports = app;
