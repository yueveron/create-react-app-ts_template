import type { ReactElement } from 'react';
import ParentComponent from './ParentCompoent';

const App = (): ReactElement => {
  const handleSubmit = (value: string): void => {
    console.debug('value:', value);
  };
  return (
    <ParentComponent>
      <button onClick={() => handleSubmit('copy content msg')}>Submit</button>
    </ParentComponent>
  );
};

export default App;
