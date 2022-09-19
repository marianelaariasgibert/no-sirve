require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require (`path`);
const hbs = require (`hbs`);
const mysql = require (`mysql2`);
const nodemailer = require (`nodemailer`);
const { compileFunction } = require('vm');
const { styles } = require('object-inspect/util.inspect');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// })


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


app.get('/', (req, res) => { 
    res.send('Conexion establecida') 
});

app.get('/index', (req, res) => {
    res.render('index')

});

// app.post('/index.hbs', async (req, res) => {
//     const suscripciones = req.body.suscripciones;
    
//     if(suscripciones === false) {
//         let alerta = 'Ingrese un correo electronico';
//         res.render('index.hbs', {
//             alerta
//         })
            
//     }  
//     else {    
//         let correo = {email: suscripciones}  

//         const querySelect = 'SELECT * FROM suscripcion WHERE ?' 
//         connection.query(querySelect,correo, 
//             function(err, results, fields) {

//             if(results.length == 0) {
        
//                 let query = 'INSERT INTO suscripcion SET ?';
    
//                 connection.query(query,correo);
//                 emailSuscripcion(suscripciones); 
//                 res.render('nuevosub.hbs')
//             } else {
                
//                 let alerta = 'Ya se encuentra suscripto';
//                 res.render('suscripto.hbs', {
//                     alerta
//                 })
                
//             }
//         });
//     }
// });



    


    // async function emailSuscripcion(suscripciones) {
    //     let transportador = nodemailer.createTransport({
    //         host: 'smtp.gmail.com',
    //         port: 465,
    //         secure: true,
    //         auth: {
    //             user: process.env.USERMAIL,
    //             pass: process.env.PASS,
    //         }
    //     });

    //     let confirmacionSuscripcion = await transportador.sendMail({
    //         from: process.env.USERMAIL,
    //         to: `${suscripciones}`,
    //         subject: 'Hotel Miramar Suscripcion',
    //         text: 'Proximamente recibira las mejores ofertas y promociones de nuestro Hotel. Gracias por susbscribirse',
    //     })
    // }
    


app.get('/habitaciones.hbs', (req, res) => {
    res.render('habitaciones')

});


app.get('/consultas.hbs', (req, res) => {
    res.render('consultas')
})


// app.post ('/consultas.hbs', (req, res) => {
//     const {nombre, apellido, email, telefono, textarea} = req.body;
    
//     if (!nombre || !apellido || !email || !telefono || !textarea) {

//         let datos = 'POR FAVOR RELLENE TODOS LOS CAMPOS!!';
//         res.render('consultas', {
//             datos
//         })

//     } else {

//         let informacion = {
//             nombre: nombre,
//             apellido: apellido,
//             email: email,
//             telefono: +telefono,
//             textarea: textarea
//         }
    
//         let sqlQuery = 'INSERT INTO consultas SET ?';
    
//         connection.query(sqlQuery,informacion);
            
//         res.render('gracias')
//     }


// })



app.listen(PORT, () => {
    console.log(PORT)
});