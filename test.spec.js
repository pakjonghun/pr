const Item = require("mock-fs/lib/item");
const { repe } = require("./src/try");

describe("fly me to the alpha centauri", () => {
  it("should return answer", () => {
    expect(repe(5, 1, [])).toBe(4);
  });
});
