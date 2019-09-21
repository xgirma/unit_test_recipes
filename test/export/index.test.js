import { Animal, Rectangle } from "../../src/export";

describe("Export", () => {
  it("should export (class)", () => {
    expect(!!Rectangle).toEqual(true, "export (class) exists");
    expect(typeof Rectangle).toEqual("function", "export (class) exists");
  });

  it("should export (function)", () => {
    expect(!!Animal).toEqual(true, "export (function) exists");
    expect(typeof Animal).toEqual("function", "export (function) exists");
  });
});
