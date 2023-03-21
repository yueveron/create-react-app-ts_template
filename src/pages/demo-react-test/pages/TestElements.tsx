import React from 'react';
interface IProps {
  onSubmit: () => void;
}

const TestElements = ({ onSubmit }: IProps) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="btn-up" onClick={() => setCounter(counter + 1)}>
        Up
      </button>
      <button data-testid="btn-submit" onClick={onSubmit}>
        submit
      </button>
    </>
  );
};

export default TestElements;
