const Usuario = require('../model/Usuario');

module.exports = {
    getUsuarios: (req, res, next) => {
        Usuario.findAll().then(usuarios => {
            console.log('teste');
            res.status(200).json(usuarios);
        }).catch(error => {
            res.status(500).json(null);
        });

    },
    getUsuarioByID: (req, res, next) => {
        Usuario.findById(req.params.id).then(usuario => {
            res.status(200).json(usuario);
        }).catch(error => {
            res.status(500).json(null);
        });
    },
    createUsuario: (req, res, next) => {
        const user = req.body;
        Usuario.create(user).then(usuario => {
            res.status(201).json(null);
        }).catch(error => {
            res.status(500).json(null);
        });
    },
    updateUsuario: (req, res, next) => {
        const user = req.body;
        console.log('BODY', req.body);

        Usuario.update(user, { where: { id: req.body.id } })
            .then(usuario => {
                res.status(200).json(null);
            }).catch(error => {
                res.status(500).json(null);
            });
    },
    deleteUsuarioById: (req, res, next) => {
        Usuario.destroy({
            where: {
                id: req.params.id
            }
        }).then((rows) => { //Número de linhas afetadas
            res.status(200).json(null);
        }).catch(error => {
            res.status(500).json(null);
        });
    },
};