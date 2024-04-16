import type {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query';

// Note: Move to new file. Ex: types/api.types.ts
export type ApiServiceErr = any;

export type MutOpt<Response, TVariables = unknown> = UseMutationOptions<
  Response,
  ApiServiceErr,
  TVariables,
  unknown
>;
export type QueryOpt<Response> = Omit<
  UseQueryOptions<Response, ApiServiceErr, Response, QueryKey>,
  'queryKey' | 'queryFn'
>;
export interface ParamOptions {
  limit: number;
  page: number;
  sortBy: string;
}

export type ParamsCommentItem = { id: string };

export type UpdateUserParams = { id: string };

export interface BaseUser {
  id: string;
  title: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
