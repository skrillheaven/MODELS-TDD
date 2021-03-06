const UserService = require('../../app/services/UserService')


describe("Test for UserService", () => {

    test("Requerimiento 1) Created a new user using the UserService", () => {
            const us = UserService.create(1, "Skrillheaven", "Alberto")
            expect(us.id).toBe(1)
            expect(us.username).toBe("Skrillheaven")
            expect(us.name).toBe("Alberto")
            expect(us.bio).not.toBeUndefined()
        }),
        test("Requerimiento 2) get all user data in a list", () => {
            const us = UserService.create(1, "Skrillheaven", "Alberto")
            const usget = UserService.getInfo(us)
            expect(usget[0]).toBe(1)
            expect(usget[1]).toBe("Skrillheaven")
            expect(usget[2]).toBe("Alberto")
            expect(usget[3]).toBe("sin bio")
        }),
        test('Requerimiento 3) Update username', () => {
            const user = UserService.create(1, "Skrillheaven", "Alberto")
            UserService.updateUserName(user, "Beto")
            expect(user.username).toBe("Beto")
        }),
        test('Requerimiento 4) Given a list of user give me the list of username', () => {
            const user1 = UserService.create(1, "Skrillheaven", "Alberto")
            const user2 = UserService.create(2, "Skrillheaven2", "Alberto")
            const user3 = UserService.create(3, "Skrillheaven3", "Alberto")
            const username = UserService.getAllUsernames([user1, user2, user3])
            expect(username).toContain("Skrillheaven")
            expect(username).toContain("Skrillheaven2")
            expect(username).toContain("Skrillheaven3")
        })
})