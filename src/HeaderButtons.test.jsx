import { render, screen } from '@testing-library/react';
import { I18nextProvider } from "react-i18next";
import { expect, it } from 'vitest';

import HeaderButtons from "./HeaderButtons";
import i18n from "./i18n";

it("renders 3 buttons", async () => {
  render(
    <I18nextProvider i18n={i18n}>
      <HeaderButtons />
    </I18nextProvider>
  );

  expect(screen.getAllByRole("button")).toHaveLength(3);
});
