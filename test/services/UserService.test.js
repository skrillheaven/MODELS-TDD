const UserService = require('../../app/services/UserService')


describe("Test for UserService", () => {

    test("Requerimiento 1) Created a new user using the UserService", () => {
        const us = UserService.create(1, "Skrillheaven", "Alberto")
        expect(us.username).toBe("Skrillheaven")
        expect(us.name).toBe("Alberto")
        expect(us.id).toBe(1)
        expect(us.bio).not.toBeUndefined()
    })
})