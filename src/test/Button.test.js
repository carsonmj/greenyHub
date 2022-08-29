import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';

import Button from "../common/components/Button";
import theme from "../styles/theme";

test("render Button", () => {
  const handleButtonClick = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <Button onClick={handleButtonClick}>test</Button>
    </ThemeProvider>

  );

  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(handleButtonClick).toBeCalledTimes(1);
  expect(button).toBeInTheDocument("test");
});