import "jasmine";

describe("sanity test", () => {
  it("should pass", () => {
    expect(true).toEqual(true);
  });

  it("should fail", () => {
    expect(true).toEqual(false);
  });
});
