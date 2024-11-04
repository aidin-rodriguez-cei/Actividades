import multer from 'multer';
import path from 'path';

// v1 opción minina. 
//export const upload = multer({dest: 'public/uploads/'})


// v2 opción con nombre personalizado
const  storage = multer.diskStorage({

    destination: function (req, file, cb) {
        // aquí definimos donde subiremos los archivos
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb){
        // aqui definimos el nombre que tendrá nuestro upload

        // v1 guardar el archivo con el mismo nombre con el que  lo
        // cb(null, file.originalname);

        //v2 Generar un nombre único + extension  (avatar-123456.png)
        //const extension = path.extname(file.originalname)
        //const uniqueNumber=Date.now() + "_" + Math.round(Math.random()*1E9);
        // ej: "avatar-unixTimeStamp-918162187361.png"
        //cb(null, `${file.fieldname}-${uniqueNumber}${extension}`)

        // V3 con fecha tipo BD "avatar-2024-09-23-12232435345.png"
        const extension = path.extname(file.originalname)
        const uniqueSuffix = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-');
    }
});

export const upload = multer({storage:storage});