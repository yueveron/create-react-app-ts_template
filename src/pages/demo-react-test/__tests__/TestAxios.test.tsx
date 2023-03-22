import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import TestAxios from '../pages/TestAxios';
import axios from 'axios';

afterEach(cleanup);

jest.mock('axios');

test('should display a loading text', async () => {
  act(() => {
    render(<TestAxios url={''} />);
  });
  const loadingEle = screen.getByTestId('loading');
  expect(loadingEle).toHaveTextContent('Loading...');
});

test('should load and display the data', async () => {
  const url = '/greeting';
  const strMsg = 'hello mother';

  act(() => {
    render(<TestAxios url={url} />);
  });

  const resp = {
    data: { greeting: strMsg },
  };
  // 关键 ：jest.Mock axios.get 劫持被测试代码中的 axios.get 方法
  const jestMock = axios.get as jest.Mock;
  jestMock.mockResolvedValue(resp);
  const btnFetchData = screen.getByTestId('fetch-data');
  fireEvent.click(btnFetchData);

  expect(jestMock).toHaveBeenCalledTimes(1);
  expect(jestMock).toHaveBeenCalledWith(url);

  // after clicking to the button, we wait for the greetingData text to be `strMsg`
  const greetingData = await waitFor(() => screen.getByTestId('show-data'));
  expect(greetingData).toHaveTextContent(strMsg);
});
