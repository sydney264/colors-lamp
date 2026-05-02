const { readCookie, getUserId } = require('../public/js/code');

describe('readCookie', () => {
    beforeEach(() => {
        global.document = {
            cookie: "firstName=Jane,lastName=Smith,userId=10"
        };

        global.window = {
            location: { href: "" }
        };
    });

    test('parses cookie and sets userId correctly', () => {
        readCookie();

        // ✅ FIXED HERE
        expect(getUserId()).toBe(10);
    });

    test('redirects if userId invalid', () => {
        document.cookie = "firstName=,lastName=,userId=-1";

        readCookie();

        expect(window.location.href).toBe("index.html");
    });
});