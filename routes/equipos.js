import express from 'express';
import leerEquipos from '../controllers/equiposController.js';

const routerEquipos = express.Router();


routerEquipos.get("/", leerEquipos) 
  



export default routerEquipos;