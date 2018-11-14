module.exports = (app) => {
    const controller = require('../controllers/index.js');

    /* GET home page. */
    app.get('/usuarios', controller.getUsuarios);
    app.get('/usuarios/:id', controller.getUsuarioByID);
    app.post('/usuarios', controller.createUsuario);
    app.put('/usuarios', controller.updateUsuario);
    app.delete('/usuarios/:id', controller.deleteUsuarioById);
}