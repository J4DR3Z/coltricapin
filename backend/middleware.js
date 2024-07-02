const cors = require('cors');
const bodyParser = require('body-parser');

const setupMiddlewares = (app) => {
    app.use(cors()); // Permitir todas las solicitudes CORS
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
};

module.exports = { setupMiddlewares };
