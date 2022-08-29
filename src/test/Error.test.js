import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';

import Error from "../common/components/Error";
import theme from "../styles/theme";

test("render Error Component", () => {
  const handleRetryButtonClick = jest.fn();

  render(
    <ThemeProvider theme={theme}>
      <Error retry={handleRetryButtonClick} />
    </ThemeProvider>

  );

  const retryButton = screen.getByRole("button");
  fireEvent.click(retryButton);

  expect(handleRetryButtonClick).toBeCalledTimes(1);
  expect(screen.getByText("An error has occurred")).toBeInTheDocument();
});