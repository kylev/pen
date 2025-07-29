import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import App from "./App";

it("renders without crashing", () => {
  render(<App />);

  expect(screen.getByRole("button", { name: "Print" })).not.toBeUndefined();
});
