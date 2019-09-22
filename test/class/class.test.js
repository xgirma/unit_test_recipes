import Rectangle from "../../src/class";

describe("Class", () => {
  it("should instantiate", () => {
    const r = new Rectangle();
    expect(!!r).toEqual(true, "instance exist");
    expect(r instanceof Rectangle).toBe(true, "instance exist");
  });

  it("should have constructor", () => {
    const r = new Rectangle();
    expect(r.constructor.name).toEqual("Rectangle", "constructor exists");
  });
});
