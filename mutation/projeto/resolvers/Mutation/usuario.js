const {usuarios, proximoId} = require('../../data/db');

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
    novoUsuario(_, {dados}){

        const emailExistente = usuarios.some(u => u.email = dados.email);

        if(emailExistente){
            throw new Error("email cadastrado")
        }

        const novo = {
            id: proximoId(),
            ...dados, //argumento espreed pega todos args com isso
            nome,
            email,
            idade,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },

    excluirUsuario(_, {filtro}){
        const i = indiceUsuario(filtro)
        if (i < 0 ) return null
        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },

    alterarUsuario(_, args){
        const i = usuarios.findIndex(u => u.id === args.id)
        if(i < 0 ) return null
        const usuario = {
            ...usuarios[i], // spreed pega todos os campos do usuario index i
            ...args         // monta uma segunda propriedade com todos os argumentos passados na funcao
                            //neste caso ele vai juntos todos os atributos se tiver algo igual ele manter o do ultimo spreed.
        }

        usuarios.splice(i, 1, usuario) //remove usuario i e depois inclui o usuario
    }
}