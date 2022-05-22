//Uso de objeto tipo Express:
const express = require('express');

//Creo app de Express:
const app = express();

//Defino el puerto en el que se va a montar la app: localhost:3000
const port = 3000;

//Indico que se van a usar JSON en las llamadas:
app.use(express.json());

//Creo un endpoint que regrese una lista de explorers (objetos) con HTTP METHODS:
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL requests ${new Date()}`);

    const explorer1 = {id: 1, name: "Diego1"};
    const explorer2 = {id: 2, name: "Diego2"};
    const explorer3 = {id: 3, name: "Diego3"};
    const explorer4 = {id: 4, name: "Diego4"};

    const explorers = [explorer1, explorer2, explorer3, explorer4];

    //Creo la respuesta a la petición con un HTTP CODE 200: 
    res.status(200).json(explorers);
});

//Creo un endpoint GET que regrese un explorer mediante un ID enviado como parámetro en la URL:
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers GET request ${new Date()}`);
    console.log(`Getting explorer with ID ${req.params.id}`);
    
    const explorer = {id: 1, name: "Diego"};

    res.status(200).json(explorer);
});

//Inicializo la app de Express:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});