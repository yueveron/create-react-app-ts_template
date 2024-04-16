import { useEffect } from 'react';
import { useUpdateUser, useGetUsers, useGetCommentItem } from './apis/query';

const UsersPage = () => {
  const { data: userListData } = useGetUsers({
    onSuccess: (data) => console.debug('userAllDatas:', data),
  });

  const { data: commentItemData } = useGetCommentItem(
    { id: '1' },
    { onSuccess: (data) => console.debug('comment:', data) }
  );

  const { mutate: mutateUpdateUser, data: userInfoData } = useUpdateUser({
    onSuccess: (data) => console.debug('data:', data),
    onError: (err) => console.log(err),
  });

  useEffect(() => {
    mutateUpdateUser({ id: '' });
  }, []);

  return (
    <>
      <h3>Resuable React Query</h3>
      Title: {userInfoData?.title}
      <p>Totals: {userListData?.length}</p>
      <p>Comment: {commentItemData?.length && commentItemData[0].name}</p>
    </>
  );
};

export default UsersPage;
