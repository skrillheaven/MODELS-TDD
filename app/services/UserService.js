const Usuario = require('./../models/user')
class UserService {
    static create(id, username, name) {
        return new Usuario(id, username, name, "sin bio")
    }
}
module.exports = UserService