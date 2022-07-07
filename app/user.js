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
    get getUsername() {
        return this.username
    }

    get getBio() {
        return this.bio
    }

    get getDataCreated() {
        return this.Created
    }

    get getLastUpdate() {
        return this.Update
    }

    set setUsername(newUsername) { // actualizar valores ''set''
        this.username = newUsername
    }

    set setBio(newBio) {
        this.bio = newBio
    }
}

module.exports = User
module.exports = Usuario