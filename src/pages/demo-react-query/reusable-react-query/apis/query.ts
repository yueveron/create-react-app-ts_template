import type {
  MutOpt,
  QueryOpt,
  BaseUser,
  ApiServiceErr,
  UpdateUserParams,
  ParamsCommentItem,
} from './types';
import { useMutation, useQuery } from 'react-query';
import { updateUserData, fetchAllUserData, fetchCommentItem } from './index';

type UserResponse = BaseUser;

export const useGetUsers = (opt?: QueryOpt<UserResponse[]>) =>
  useQuery<UserResponse[], ApiServiceErr>(
    ['users'],
    () => fetchAllUserData(),
    opt
  );

type CommentItem = {
  id: string;
  name: string;
};
export const useGetCommentItem = (
  { id }: ParamsCommentItem,
  opt?: QueryOpt<CommentItem[]>
) =>
  useQuery<CommentItem[], ApiServiceErr>(
    ['comment-item', id],
    () => fetchCommentItem({ id }),
    opt
  );

/**
 * useMutation<ResultResponse, ErrorRespone, RequestParams>
 */
export const useUpdateUser = (opt?: MutOpt<UserResponse>) =>
  useMutation<UserResponse, ApiServiceErr, UpdateUserParams>(updateUserData, {
    ...opt,
  });
