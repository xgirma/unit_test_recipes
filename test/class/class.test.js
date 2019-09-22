import Rectangle from "../../src/class";

describe("Class", () => {
  let r;
  beforeEach(() => {
    r = new Rectangle();
  });

  it("should instantiate", () => {
    expect(!!r).toEqual(true, "instance exist");
    expect(r instanceof Rectangle).toBe(true, "instance exist");
  });

  it("should have constructor", () => {
    expect(r.constructor.name).toEqual("Rectangle", "constructor exists");
  });

  it("should have a method", () => {
    expect(typeof r.calcArea).toEqual("function", "method exists");
  });
});
