import { describe, expect, it } from "vitest";

import { defaultLineSpec, lineDash } from "./lines";

it("has the necessary keys", () => {
  const s = defaultLineSpec();
  expect(s.offset).toBeDefined();
  expect(s.color).toBeDefined();
  expect(s.thickness).toBeDefined();
  expect(s.dash).toBeDefined();
});

describe("lineDash", () => {
  it("returns 1 key", () => {
    expect(lineDash("1, 1")).toMatchObject({ strokeDasharray: "1, 1" });
  });
});
