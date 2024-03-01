import type { ReactElement, ReactNode } from 'react';
type ParentProps = {
  children?: ReactNode;
};
const ParentComponent = ({ children }: ParentProps): ReactElement => {
  return (
    <>
      <p>ParentComponent</p>
      <div>{children}</div>
    </>
  );
};

export default ParentComponent;
