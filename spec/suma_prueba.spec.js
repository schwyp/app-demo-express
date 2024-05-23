const { suma } = require("../suma");

describe("Test about dummy function", () => {
    it("should return a + b number", () => {
        const result = suma(4, 3);
        expect(result).toBe(7);
    });
    
    it("should fail", () => {
        const numberA = 5;
        const numberB = 6;
        const result = suma(numberA, numberB);
        expect(result).not.toEqual(14);
    })
})