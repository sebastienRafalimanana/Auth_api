const assert = require('assert').strict;

describe("integration test", function() {
    it("Listing users", function() {
        const user  = new User();
        user.add("jean")
        assert.strictEqual(user.getList().length,3);
        assert.deepStrictEqual(user.getList(), ["Bolida","malala","jean"]);
    });
});
