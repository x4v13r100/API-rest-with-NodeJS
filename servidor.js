//console.log("Hola mundo")

// Importar paquetes
const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require("./modelos/Tarea.js");

const app = express();

// definir ruta
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexion a base de datos
mongoose.connect("mongodb+srv://prog_web:cHzlEkxlbuY8fc0m@clusterprogweb.oylkgap.mongodb.net/ActividadesDB?retryWrites=true&w=majority");

// Operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

// Lectura
router.get('/tarea', (req, res) => {
        TareaSchema.find(function (err, datos) {
            if(err) {
                console.log("Error leyendo tareas");
            }else {
                res.send(datos);
            }
        })
});



// Añadir
router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });

    nuevaTarea.save(function (err, datos) {
        if (err){
            console.log(err);
        
        }
        res.send("Tarea almacenada correctamente")
    })
});


app.use(router);
// Configurar puerto
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 30000")
});