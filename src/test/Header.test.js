import { render, screen } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';

import Header from "../common/components/Header";
import theme from "../styles/theme";

test("render Header component", () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );

  expect(screen.getByText("greenyHub")).toBeInTheDocument();
});