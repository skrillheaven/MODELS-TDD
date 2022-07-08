const User = require('../../app/models/user')
const Usuario = require('../../app/models/user')
describe("Unit test for user twitter ", () => {
    /*Sprint 1: Agregar modelos*/

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
            expect(user.bio).toBe("new bio")
        })
        /*Sprint 2: Agregar servicios
        Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
        Criterios de aceptación:
        1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
        2. El valor de `bio` deberá ser por default para todos los `user` creados.

        Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

        Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

        Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. */

})