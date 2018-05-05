import React from "react";
import { I18nextProvider } from "react-i18next";
import { mount } from "enzyme";

import i18n from "./i18n";
import HeaderButtons from "./HeaderButtons";

it("renders 3 buttons", () => {
  const div = mount(
    <I18nextProvider i18n={i18n}>
      <HeaderButtons />
    </I18nextProvider>
  );

  expect(div.find("button")).toHaveLength(3);
});
