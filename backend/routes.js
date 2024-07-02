const { dbService } = require('./services/dbService');

const setupRoutes = (app) => {
  const { crearUsuario, getUsuario, loginUsuario, recuperarContrasena } = dbService();

  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const result = await loginUsuario(username, password);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error en el login', error });
    }
  });

  app.post('/crearUsuario', async (req, res) => {
    const { email, username, password, role, course } = req.body;
    try {
      const result = await crearUsuario(email, username, password, role, course);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error creando usuario', error });
    }
  });

  app.get('/usuarios', async (req, res) => {
    try {
      const usuarios = await getUsuario();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo usuarios', error });
    }
  });

  app.post('/recuperarContrasena', async (req, res) => {
    const { email } = req.body;
    try {
      const result = await recuperarContrasena(email);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error enviando correo de recuperación', error });
    }
  });
};

module.exports = { setupRoutes };
