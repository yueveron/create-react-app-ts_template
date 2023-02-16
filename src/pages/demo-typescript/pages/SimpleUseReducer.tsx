/**
 * React 的官方说法 : useReducer 是 useState 的一种替代性写法，让代码更容易维护及拓展
    - useState :适合定义一些简单的状态(字符串、数值型、布尔型)
    - useReducer : 适合逻辑比较复杂的state(数组或对象等其它复杂的类型等)
*/
import { useReducer } from 'react';
type TAction =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }
  | { type: 'reset'; payload: number };
type TState = {
  count: number;
};
const initialState: TState = { count: 0 };
const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return { count: action.payload };
    default:
      return state;
  }
};
const SimpleUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state}
      <div>
        <button
          onClick={() =>
            dispatch({ type: 'reset', payload: initialState.count })
          }
        >
          Reset
        </button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
          Increment
        </button>
      </div>
    </>
  );
};
export default SimpleUseReducer;
