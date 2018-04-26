import { defaultLineSpec } from "./lines";

it("has the necessary keys", () => {
  const s = defaultLineSpec();
  expect(s.offset).toBeDefined();
  expect(s.color).toBeDefined();
  expect(s.thickness).toBeDefined();
  expect(s.dash).toBeDefined();
});
