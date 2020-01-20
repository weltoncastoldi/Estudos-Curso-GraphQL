const { usuarios, perfis } = require('../data/db')

function indiceUsuario (filtro){
    if(!filtro) return -1
    const { id, email} = filtro
    if(id){
        return usuarios.findIndex(u => u.id === id)
    }else if(email){
        return usuarios.findIndex(u => u,email === id)
    }
    return -1
}

module.exports = {
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const sels = usuarios
            .filter(u => u.id === id)
        return sels ? sels[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis
            .filter(p => p.id === id)
        return sels ? sels[0] : null 
    }
}