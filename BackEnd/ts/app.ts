import { Alumnos } from "./Alumnos";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
const AlumnosLista = require('./getAlumnos');

const configuracion={
    hostname: "127.0.0.1",
    port: 3001,
}

var jsonParser = bodyParser.json();
app.use(cors());

//GET
app.get('/Alumnos', AlumnosLista.GetAlumnos);

//POST
//app.post('/InsertarArtistas',bodyParser.json(),Insertar.PostArtistas);

  app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://${configuracion.hostname}:${configuracion.port}`)
  })