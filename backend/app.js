const express = require('express');
const { setupMiddlewares } = require('./middleware');
const { setupRoutes } = require('./routes');

const app = express();
const PORT = 5000;

// Configurar middlewares
setupMiddlewares(app);

// Configurar rutas
setupRoutes(app);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
