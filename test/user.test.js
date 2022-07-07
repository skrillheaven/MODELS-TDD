const User = require('./../app/user')
describe("Unit test for user twitter ", () => {
    test('Requerimiento 1) Guardar la info de usuario en nuestra app', () => {
        //invocamos el codigo a usar en la app
        const user = new User(1, "Alberto Cruz", "skrillheaven", "Bio ", "dateCreated", "lastUpdated")
            //validamos los resuktados del codigo
            //Comparativa que va a igualar el valor de la izquierda con la derecha
        expect(user.id).toBe(1)
        expect(user.username).toBe("Alberto Cruz")
        expect(user.name).toBe("skrillheaven")
        expect(user.bio).tobe("Bio")
        expect(user.dataCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdated")
    })
})