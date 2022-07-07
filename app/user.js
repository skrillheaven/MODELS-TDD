class User {
    constructor(id, username, name, bio
        /*, dateCreated, lastUpdate*/
    ) {
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
            /*this.dateCreated = dateCreated
            this.lastUpdate = lastUpdate*/
    }
}

class Usuario {
    constructor(id, username, name, bio) {
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.Created = new Date()
        this.Update = new Date()
    }
}

module.exports = User
module.exports = Usuario