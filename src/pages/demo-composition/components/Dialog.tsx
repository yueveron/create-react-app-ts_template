import type { ReactElement, Ref } from 'react';
import { forwardRef, useImperativeHandle, useState } from 'react';

type DialogProps = {
  title: string;
  message: string;
  children: ReactElement;
};

export type RefType = {
  // eslint-disable-next-line no-unused-vars
  doSomething: (id: string) => void;
};

const Dialog = (props: DialogProps, ref: Ref<RefType>): ReactElement => {
  const [info, setInfo] = useState('');
  const doSomething = (id: string) => {
    console.debug('do something:', id);
    setInfo(id);
  };

  useImperativeHandle(ref, () => ({ doSomething }));

  return (
    <>
      <h3 className="Dialog-title">{props.title}</h3>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
      <h5>Dialog : {info}</h5>
    </>
  );
};

export default forwardRef(Dialog);
