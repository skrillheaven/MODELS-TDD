const UserService = require('../../app/services/UserService')

describe("Test for UserService", () => {

    test("Requerimiento 1) Created a new user using the UserService", () => {
        const us = new UserService.create(1, "Skrillheaven", "Alberto")
        expect(us.id).toBe(1)
        expect(us.Username).toBe("Skrillheaven")
        expect(us.name).toBe("Alberto")
        expect(user.bio).not.toBeUndefined()
    })
})