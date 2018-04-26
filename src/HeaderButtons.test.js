import React from "react";
import { mount } from "enzyme";

import HeaderButtons from "./HeaderButtons";

it("renders 3 buttons", () => {
  const div = mount(<HeaderButtons />);
  expect(div.find("button")).toHaveLength(3);
});
