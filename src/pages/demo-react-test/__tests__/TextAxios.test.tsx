import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import TestAxios from '../pages/TextAxios';

jest.mock('axios');

test('should display a loading text', async () => {
  act(() => {
    render(<TestAxios url={''} />);
  });
  const loadingEle = screen.getByTestId('loading');
  expect(loadingEle).toHaveTextContent('Loading...');
});

// test('should load and display the data', async () => {
//   const url = '/greeting';
//   const { getByTestId } = render(<TestAxios url={url} />);

//   fireEvent.click(getByTestId('fetch-data'));
// });
