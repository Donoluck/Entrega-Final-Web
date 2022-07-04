import { Alumnos } from "./Alumnos";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');

const configuracion={
    hostname: "127.0.0.1",
    port: 3001,
}

const {Client} = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'DataWeb',
  password: 'Cobreloa1',
  port: 5432
})

client.connect();

var jsonParser = bodyParser.json();
app.use(cors());

//GET
const GetAlumnos=((req:any, res:any) => {
  let ListaAlumnos=new Array<Alumnos>();
  client.query(`SELECT * FROM "Alumnos"`, (err:any, respuesta:any) => {
      if (err) {
          console.error(err);
          return;
      }
      for (let row of respuesta.rows) {
          ListaAlumnos.push(row);
      }
       console.log(ListaAlumnos);
      res.send(JSON.stringify({"status":"ok","items":ListaAlumnos}));
      //client.end();
  })
})

module.exports={
    GetAlumnos
}