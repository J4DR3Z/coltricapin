require('dotenv').config();
const nodemailer = require('nodemailer');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  debug: true // Activar modo de depuración para obtener más detalles de errores
});

const table = 'users';

const dbService = () => {
  const getUsuario = async () => {
    try {
      return await knex(table).select();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };

  const crearUsuario = async (email, username, password, role, course) => {
    try {
      console.log('Datos recibidos:', { email, username, password, role, course });
  
      // Inserta un nuevo usuario en la tabla 'usuarios'
      const [userId] = await knex('usuarios').insert({
        email,
        username,
        password,
        role
      });
  
      console.log('ID del usuario creado:', userId);
  
      // Si el usuario es un estudiante, inserta en la tabla 'estudiantes'
      if (role === 'Estudiante') {
        await knex('estudiantes').insert({
          user_id: userId,
          course
        });
      } else if (role === 'Profesor') {
        // Si el usuario es un profesor, inserta en la tabla 'profesores'
        await knex('profesores').insert({
          user_id: userId
        });
      }
  
      return { success: true, userId };
    } catch (error) {
      console.error('Error creando usuario:', error);
      throw error;
    }
  };

  const insertarCurso = async (nombreCurso) => {
    try {
      const [cursoId] = await knex('cursos').insert({
        nombre: nombreCurso,
      });
      console.log(`Curso insertado con ID: ${cursoId}`);
      return cursoId;
    } catch (error) {
      console.error('Error al insertar curso:', error);
      throw error;
    }
  };

  const loginUsuario = async (username, password) => {
    try {
      const user = await knex('usuarios').where({ username: username, password: password }).first();
      if (user) {
        return { success: true, message: 'Login exitoso' };
      } else {
        return { success: false, message: 'Usuario o contraseña incorrectos' };
      }
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  };

  const recuperarContrasena = async (email) => {
    try {
      const user = await knex('usuarios').where({ email }).first();
      if (!user) {
        throw new Error('No se encontró el usuario con el email proporcionado');
      }
  
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      let info = await transporter.sendMail({
        from: `"Soporte" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Recuperación de contraseña',
        text: `Haz solicitado una recuperación de contraseña. Tu contraseña es: ${user.password}`,
      });
  
      console.log('Correo enviado:', info.messageId);
      return { success: true, message: 'Correo de recuperación enviado' };
    } catch (error) {
      console.error('Error al enviar correo de recuperación:', error);
      throw error;
    }
  };

  return { crearUsuario, getUsuario, loginUsuario, insertarCurso, recuperarContrasena };
};

module.exports = { dbService };
