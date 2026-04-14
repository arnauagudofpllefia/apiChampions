
//array con datos de equipos de la champions league

const equipos =[
    {
        id: 1,
        nombre: "Barcelona",
        pais: "España",},
    {
        id: 2,
        nombre: "Manchester City",
        pais: "Inglaterra",},
    {
        id: 3,
        nombre: "Bayern Munich",
        pais: "Alemania",},
]

export default function leerEquipos(req, res) {
    console.log("controlador leerEquipos ejecutado");
    res.json({
        mensaje: "lista de equipos de controllador",
        equipos: equipos
    });
}

