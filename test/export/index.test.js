import { cube, foo, graph, Rectangle } from "../../src/export";

describe("Export", () => {
  it("should export (class)", () => {
    expect(!!Rectangle).toEqual(true, "export (class) exists");
    expect(typeof Rectangle).toEqual("function", "export (class) exists");
  });

  it("should export (function)", () => {
    expect(!!cube).toEqual(true, "export (function) exists");
    expect(typeof cube).toEqual("function", "export (function) exists");
  });

  it("should export (primitive)", () => {
    expect(!!foo).toEqual(true, "export (primitive) exists");
    expect(typeof foo).toEqual("number", "export (primitive) exists");
  });

  it("should export (object)", () => {
    expect(!!graph).toEqual(true, "export (object) exists");
    expect(typeof graph).toEqual("object", "export (object) exists");
  });
});
