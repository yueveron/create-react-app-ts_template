import { QueryClient, QueryClientProvider } from 'react-query';
import UsersPage from './UsersPage';

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersPage />
    </QueryClientProvider>
  );
}
