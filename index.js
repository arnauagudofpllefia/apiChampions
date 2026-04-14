console.log("Hello, World!");

import express from "express";
import routerEquipos from "./routes/equipos.js";
import cors from "cors";

const app = express();

app.use(cors());

//middleware para rutas

app.use("/api/equipos", routerEquipos);

app.get("/", (req, res) => {
  res.send("peticion recibida");
});

/*
app.get("/api/equipos", (req, res) => {
  console.log("peticion recibida en /api/equipos");
  res.json({
    mensaje: "peticion recibida en /api/equipos",
    equipos: []
  });
});
*/
//levantar servidor

app.listen(3000, () => {
  console.log("Servidor levantado en el puerto 3000");
});