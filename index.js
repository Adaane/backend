// const express = require('express')
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

// connexion mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CRMdb', {
    useNewUrlParser: true, useUnifiedTopology: true
});

//bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.use(express.static('public'));

app.get('/', (req, res) => (
    res.send(`Serveur node et express sur port ${PORT}`)
));

app.listen(PORT, () => (
    console.log(`votre serveur est sur le port ${PORT}`)
));