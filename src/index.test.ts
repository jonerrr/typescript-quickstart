import foo from "./index";

describe("index", () => {
	it("should return foobar when given foobar", () => {
		expect(foo("foobar", 1)).toBe("foobar");
	});
});
