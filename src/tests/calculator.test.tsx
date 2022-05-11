/**
 * @jest-environment jsdom
 */

import App from "../components/app/app";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

test('should output "1" to the screen', () => {
  const {getByText} = render(<App />);
  fireEvent.click(getByText('1'));
  expect(screen.getByTestId('input')).toHaveTextContent('1');
});


test('should output "1+1" to the input section of the screen and "2" to the result section of the screen', () => {
  const {getByText} = render(<App />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('='));
  expect(screen.getByTestId('input')).toHaveTextContent('1+1');
  expect(screen.getByTestId('result')).toHaveTextContent('2');
});
