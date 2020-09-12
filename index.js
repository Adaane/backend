// const express = require('express')
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => (
    res.send(`Serveur node et express sur port ${PORT}`)
));

app.listen(PORT, () => (
    console.log(`votre serveur est sur le port ${PORT}`)
));