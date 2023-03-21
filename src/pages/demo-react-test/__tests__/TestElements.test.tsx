import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import TestElements from '../pages/TestElements';

afterEach(cleanup);

test('test TestElements', () => {
  const mockSubmit = jest.fn();

  act(() => {
    render(<TestElements onSubmit={mockSubmit} />);
  });
  const titleEle = screen.getByTestId('counter');
  expect(titleEle).toBeInTheDocument();

  const btnInc = screen.getByTestId('btn-up');
  fireEvent.click(btnInc);
  expect(titleEle).toHaveTextContent('1');

  const btnSubmit = screen.getByTestId('btn-submit');
  fireEvent.click(btnSubmit);
  expect(mockSubmit).toHaveBeenCalled;
});
