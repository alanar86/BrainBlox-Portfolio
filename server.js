const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

app.post('/enviar', (req, res) => {
    const { nombre, email, telefono, asunto, mensaje } = req.body;

    // Configuración de Nodemailer con tu email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aarias.edev@gmail.com',
            pass: 'tucontraseña' // ¡Cambia esto a tu contraseña real!
        }
    });

    const mailOptions = {
        from: email,
        to: 'aarias.edev@gmail.com',
        subject: `Asunto: ${asunto} - De: ${nombre}`,
        text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Ocurrió un error al enviar el correo.');
        } else {
            res.send('Correo enviado con éxito.');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
