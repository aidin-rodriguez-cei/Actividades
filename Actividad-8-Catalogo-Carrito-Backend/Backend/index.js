import express from 'express'
import FULL_DOMAIN from 'FULL_DOMAIN'

// Hash y JWT
import bcrypt from 'bcrypt'; // es para hacer hash de nuestro passwords
import jwt from 'jsonwebtoken'; // crear y leer tokens JWT

// middlewares
import cors from 'cors'

// configuraciones
import { PORT, DOMAIN, JWT_SECRET, __dirname } from './config.js'
import path from 'path';

// elementos de Auth
import { authenticateToken } from './middlewares/auth.js';

// elementos de Upload
import { upload } from './middlewares/multer.js';

// Utilities
const app = express()

// Middlewares

// app.use('/', express.static('public'));
app.use(express.static(path.join(__dirname, "public")));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// base de datos
const users = [];

const MockUsers = {
    name: 'Aidin',
    username: 'aidin@mail.com',
    password: '1234',
    image: 'https://picsum.photos/200'
}


// Rutas

app.post("/api/v1/upload", upload.single("avatar"), (req, res, next) => {
    console.log("Archivo Subido");

    console.log("file es: ", req.file); // información del archivo
    console.log("body es: ", req.body); // otros camps del formulario

    // guardar en la DB

    res.status(201).json({
        "mensaje": "Archivo subido correctamente",
        file: req.file,
        body: req.body,
        peso: `${Math.round(req.file.size / 1024)} kbytes`,
        url: `${FULL_DOMAIN}/uploads${req.file.filename}`
    })
})


app.get('/api/v1/users', async (req, res, next) => {
    res.status(200).json({ data: users, mesage: "Aquì estan tus usuarios" });
})

app.post('/api/v1/login', async (req, res, next) => {
    try {

        const { username, password } = req.body;

        // obtener el usuario recién creado
        const user = users.find((u) => u.username === username);

        if(!user) {
            return res.status(400).json({message:"usuario no existente"})
        }

        // comprar la contraseña de la base de datos, con la contraseña del login
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({message:"Clave incorrecta"});
        }

        console.log("User encontrado: ", user);

        // Crear JWT Token y devuelvo el usuario

        // Create and Sign a New Token
        const token = jwt.sign({username:username}, JWT_SECRET, { expiresIn: '1h'});


        console.log("haciendo login");
        res.status(200).json({ data: MockUsers, mesage: "Login correcto", token})
    } catch (e) {
        res.status(500).json({ error: 'Error en el servicio' })
    }

});

app.post('/api/v1/register', async (req, res, next) => {

    const { username, password, name, image = 'https://picsum.photos/200' } = req.body;

    console.log(req.body);
    console.log(image);

    // Hash de contraseña con Bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Guardar esto en la DB
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = { id, username, password: hashedPassword, name, image };
    users.push(newUser);

    // obtener el usuario recién creado
    const user = users.find((u) => u.username === username);
    //const user = users.find((u) => u.id === id);

    try {
        console.log("haciendo register");
        res.status(200).json({ data: users, mesage: "Registro correcto" })

    } catch (e) {
        res.status(500).json({ error: 'Error en el servicio' })
    }

});

app.get('/api/v1/admin', authenticateToken, async (req, res, next) => {
    console.log("ver contenido privado de admin");
    res.status(200).json({ data: MockUsers, mesage: "Aquì estan tu contenido privado" })

});

app.listen(PORT, () => {
    console.log(`Server esta corriendo en ${DOMAIN}:${PORT}`)
})
