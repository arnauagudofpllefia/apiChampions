console.log("Hello, World!");

import express from "express";
import routerEquipos from "./routes/equipos.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

//middleware para rutas

app.use("/api/equipos", routerEquipos);

app.get("/", (req, res) => {
  res.send("peticion recibida " + process.env.EJEMPLO);
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});