/* routerUser.post('/loginRes', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log("Constantes:", email, password);

        // Si no se escribe el email o la contraseña
        if (!email || !password) {
            return res.render('loginRes', { error: 'Todos los campos son obligatorios', classError: 'error' });
        }

        // Consulta a la base de datos
        connection.query('SELECT * FROM residentes_aire WHERE email_res = ?', [email], async (err, result) => {
            console.log("Resultado de la consulta:", result);
            if (err) {
                console.error('Error en la consulta a la base de datos:', err);
                return res.status(500).render('loginRes', { error: 'Error en el servidor', classError: 'error' });
            }

            // Verificación de usuario
            if (!result || result.length == 0) {
                console.log("Usuario no encontrado");
                return res.render('loginRes', { error: 'Usuario o contraseña incorrectos', classError: 'error' });
            }

            // Verificación de la contraseña
            const user = result[0];
            console.log("Contraseña del usuario:", user.password_res);
            const passwordMatches = await bcryptjs.compare(password, user.password_res);
            console.log("Comparación de contraseñas:", passwordMatches);

            if (!passwordMatches) {
                console.log("Contraseña incorrecta");
                return res.render('loginRes', { error: 'Usuario o contraseña incorrectos', classError: 'error' });
            }

            // Si todo está bien
            const idUser = user.id_residente;
            console.log('ID del usuario:', idUser);
            const token = jwt.sign({ id: idUser }, process.env.JWT_SECRETO, { expiresIn: process.env.JWT_TIEMPO_EXPIRE });
            console.log("Token:", token);

            const cookiesOptions = {
                expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                httpOnly: true
            };

            res.cookie('jwt', token, cookiesOptions);
            res.render('mainUserAire', { usuario: user });
        });

    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).render('loginRes', { error: 'Error en el servidor', classError: 'error' });
    }
}); */


/* routerUser.get('/main', (req, res) => {
    res.render('mainUserAire');
}) */