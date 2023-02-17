/* eslint-disable react/display-name */
import '../../styles/globals.scss'; // 全局引入 scss
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
//
const queryClient = new QueryClient();
//
const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};
//
const DemoReactQuery = () => {
  const { data, status } = useQuery(['users'], fetchUsers);
  return (
    <div className="mainWrapper">
      <h3>Demo React Query</h3>
      <QueryClientProvider client={queryClient}>
        {status === 'error' && <p>Error fetching data</p>}
        {status === 'loading' && <p>Fetching data...</p>}
        {status === 'success' && (
          <div>
            {data.map((user: any) => (
              <p key={user.id}>{user.name}</p>
            ))}
          </div>
        )}
      </QueryClientProvider>
    </div>
  );
};

// Higher order function
const hof = (WrappedComponent: any) => {
  // Its job is to return a react component warpping the baby component
  return (props: JSX.IntrinsicAttributes) => (
    <QueryClientProvider client={queryClient}>
      <WrappedComponent {...props} />
    </QueryClientProvider>
  );
};

export default hof(DemoReactQuery);
