const { saveCookie, setUserData } = require('../public/js/code');

describe('saveCookie', () => {
    beforeEach(() => {
        global.document = { cookie: "" };
    });

    test('sets cookie correctly', () => {
        // ✅ THIS IS WHAT YOU WERE MISSING
        setUserData(5, "John", "Doe");

        saveCookie();

        expect(document.cookie).toContain("firstName=John");
        expect(document.cookie).toContain("lastName=Doe");
        expect(document.cookie).toContain("userId=5");
    });
});