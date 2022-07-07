const User = require('./../app/user')
const Usuario = require('./../app/user')
describe("Unit test for user twitter ", () => {
    test('Requerimiento 1) Guardar la info de usuario en nuestra app', () => {
            //invocamos el codigo a usar en la app
            const user = new User(1, "Alberto Cruz", "skrillheaven", "Bio"
                    /*, "dateCreated", "lastUpdated"*/
                )
                //validamos los resuktados del codigo
                //Comparativa que va a igualar el valor de la izquierda con la derecha
            expect(user.id).toBe(1)
            expect(user.username).toBe("Alberto Cruz")
            expect(user.name).toBe("skrillheaven")
            expect(user.bio).toBe("Bio")
                /*expect(user.dateCreated).toBe("dateCreated")
                                    expect(user.lastUpdate).toBe("lastUpdated") */
        }),
        test(' Requerimiento 2) Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha', () => {
            const user2 = new Usuario(2, "chino1305", "diego", "ola k ase")
            expect(user2.id).toBe(2)
            expect(user2.username).toBe("chino1305")
            expect(user2.name).toBe("diego")
            expect(user2.bio).toBe("ola k ase")
            expect(user2.Created).not.toBeUndefined()
            expect(user2.Update).not.toBeUndefined()
        }),
        test('Requerimiento 3) Cada objeto tipo user necesita getters', () => {
            const user = new Usuario(3, "estrella2000", "diana", "bio")
            expect(user.getUsername).toBe("estrella2000")
            expect(user.getBio).toBe("bio")
            expect(user.getDataCreated).not.toBeUndefined()
            expect(user.getLastUpdate).not.toBeUndefined()
        }),
        test('Requerimiento 4) Cada objeto necesita  setters', () => {
            const user = new Usuario(4, "mina1962", "guillermina", "homework")
            user.setUsername = "mina"
            expect(user.username).toBe("mina")

            user.setBio = "new bio"
            expect(user.bio).toBe("nw bio")
        })
})