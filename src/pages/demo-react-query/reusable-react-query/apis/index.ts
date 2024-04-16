import axios from 'axios';
import type { UpdateUserParams, ParamsCommentItem } from './types';

export const updateUserData = async (data: UpdateUserParams) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      title: 'foo',
      userId: 1,
    }
  );
  console.debug('post-response:', response, data);
  return response.data;
};

/** none of reqParams*/
export const fetchAllUserData = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
    {}
  );
  return response.data;
};

export const fetchCommentItem = async (reqParams: ParamsCommentItem) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/comments',
    {
      params: reqParams,
    }
  );
  return response.data;
};
