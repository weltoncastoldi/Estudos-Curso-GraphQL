const usuario = require('./usuario.js');
const perfil = require('./perfil.js');

module.export = {
    ...usuario,
    ...perfil,
}