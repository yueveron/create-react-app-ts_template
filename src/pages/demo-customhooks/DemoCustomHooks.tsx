import '../../styles/globals.scss';
import { useEffect } from 'react';
//
import useDisplayList from './hooks/useDisplayList';
const DemoCustomHooks = () => {
  const apiUrl = 'http://jsonplaceholder.typicode.com/posts';
  const { error, loading, list } = useDisplayList(apiUrl);
  useEffect(() => {
    console.debug('DemoCustomHooks');
  }, []);
  return (
    <div className="mainWrapper">
      <h3>Demo Custom Hooks</h3>
      <div>
        {loading && '...loading'}
        {list &&
          list.map((item: any) => (
            <p key={item.id}>
              {item.id} - {item.title}
            </p>
          ))}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
export default DemoCustomHooks;
