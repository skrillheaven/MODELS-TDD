const User = require('./../models/user')
class UserService {
    static create(id, Username, name) {
        return new User(id, Username, name, "sin bio")
    }
}
module.exports = UserServiced