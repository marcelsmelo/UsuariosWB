const Usuario = require('../model/Usuario');

module.exports = {
    getUsuarios: (req, res, next) => {
        console.log("teste aqui")
        Usuario.findAll().then(usuarios => {
            console.log('teste');
            res.status(200).json(usuarios);
        }).catch(error => {
            res.status(500).json({msg: "Erro ao buscar usuários", error: error});
        });

    },
    getUsuarioByID: (req, res, next) => {
        Usuario.findByPk(req.params.id).then(usuario => {
            res.status(200).json(usuario);
        }).catch(error => {
            res.status(500).json({msg: "Erro ao buscar usuário", error: error});
        });
    },
    createUsuario: (req, res, next) => {
        const user = req.body;
        Usuario.create(user).then(usuario => {
            res.status(201).json({msg: "Usuário criado com sucesso", usuario: usuario});
        }).catch(error => {
            res.status(500).json({msg: "Erro ao criar usuário", error: error});
        });
    },
    updateUsuario: (req, res, next) => {
        const user = req.body;
        console.log('BODY', req.body);

        Usuario.update(user, { where: { id: req.body.id } })
            .then(usuario => {
                res.status(200).json({msg: "Usuário atualizado com sucesso"});
            }).catch(error => {
                res.status(500).json({msg: "Erro ao atualizar usuário", error: error});
            });
    },
    deleteUsuarioById: (req, res, next) => {
        Usuario.destroy({
            where: {
                id: req.params.id
            }
        }).then((rows) => { //Número de linhas afetadas
            res.status(200).json({msg: "Usuário removido com sucesso"});
        }).catch(error => {
            res.status(500).json({msg: "Erro ao apagar usuário", error: error});
        });
    },
};