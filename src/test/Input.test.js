import { render } from "@testing-library/react";
import { useRef } from "react";
import { ThemeProvider } from 'styled-components';

import Input from "../common/components/Input";
import theme from "../styles/theme";

jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useRef: jest.fn(),
  };
});

test("render Input component", () => {
  const ref = useRef();

  const { getByPlaceholderText } = render(
    <ThemeProvider theme={theme}>
      <Input ref={ref} placeholder="Input test" width="10rem" height="3rem" />
    </ThemeProvider>
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  getByPlaceholderText("Input test");
});