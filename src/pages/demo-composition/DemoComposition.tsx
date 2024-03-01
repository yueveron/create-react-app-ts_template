import type { ReactElement } from 'react';
import type { RefType } from './components/Dialog';
import { useState, useRef } from 'react';
import Dialog from './components/Dialog';

const App = (): ReactElement => {
  const dialogRef = useRef<RefType>(null);

  const [login, setLogin] = useState('');
  const [signName, setSignName] = useState('');
  const handleChange = (e: any): void => {
    setLogin(e.target.value);
  };
  const handleSignUp = (): void => {
    setSignName(login);
    dialogRef.current?.doSomething(login);
  };

  const message = `How should we refer to you?${signName}`;
  return (
    <>
      <h3>Composition组合 与 `useRef` 做架构</h3>
      <Dialog ref={dialogRef} title="Premier League" message={message}>
        <>
          <input value={login} onChange={handleChange} />
          <button onClick={handleSignUp}>Sign Me Up!</button>
        </>
      </Dialog>
    </>
  );
};

export default App;
