const Usuario = require('./../models/user')
class UserService {
    static create(id, username, name) {
        return new Usuario(id, username, name, "sin bio")
    }
    static getInfo(usuario) {
        return [usuario.id, usuario.username, usuario.name, usuario.bio]
    }
    static updateUserName(name1, new_name) {
        return name1.username = new_name
    }

}





module.exports = UserService