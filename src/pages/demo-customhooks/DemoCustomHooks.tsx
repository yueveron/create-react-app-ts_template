import '../../styles/globals.scss';
import { useEffect } from 'react';
import useDisplayList from './hooks/useDisplayList';
import useCopyToClipboard from './hooks/useCopyToClipboard';
import useKeyPress from './hooks/useKeyPress';

/** useDisplayList - get url, return response list data */
export const DemoUseDispalyList = () => {
  const apiUrl = 'http://jsonplaceholder.typicode.com/posts';
  const { error, loading, list } = useDisplayList(apiUrl);
  useEffect(() => {
    // console.debug('DemoUseDispalyList');
  }, []);
  return (
    <div className="mainWrapper">
      <h4>Demo Custom Hooks : useDisplayList</h4>
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

/** useCopyToClipboard - return state and function */
export const DemoUseCopyToClipboard = () => {
  const { isCopied, handleCopy } = useCopyToClipboard();

  return (
    <>
      <h4>Demo Custom Hooks : useCopyToClipboard</h4>
      <button onClick={() => handleCopy('copy content msg')}>
        {isCopied ? 'has-copy' : 'none-copy'}
      </button>
    </>
  );
};

/** useKeyBoard - get which kep has press */
export const DemoUseKeyBoard = () => {
  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');

  useEffect(() => {
    if (arrowUpPressed) {
      console.debug('arrowUpPressed:', arrowUpPressed);
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      console.debug('arrowDownPressed:', arrowDownPressed);
    }
  }, [arrowDownPressed]);
  return (
    <>
      <h4>Demo Custom Hooks : Detect Keyboard Press</h4>
      <p>{arrowUpPressed ? 'Press Up' : 'Released Up'}</p>
      <p>{arrowDownPressed ? 'Press Down' : 'Released Down'}</p>
    </>
  );
};
