import axios from 'axios';
import { fetchUsersApi } from '../apis/testEnquiryApi';

// step-1: use jest.mock('axios') to mock Axios in Jest
jest.mock('axios');

test('test fetchUsersApi', async () => {
  // given mock-result
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Andrew' },
  ];
  // step-2: 劫持 axios.get 方法，通过 mockResolvedValueOnce 让其 return Promise.resolve
  //  - axios.get.mockResolvedValueOnce will return Promise.resolve(users)
  //  - If you were testing POST, axios.post should be used.
  const jestMock = axios.get as jest.Mock;
  jestMock.mockResolvedValue(users);
  // step-3: Call the function you are testing
  const response = await fetchUsersApi();
  // step-4: Confirm that the request was sent to the correct endpoint and that the correct result is returned
  expect(response).toEqual(users);
});
