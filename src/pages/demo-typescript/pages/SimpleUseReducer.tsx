/**
 * React 的官方说法 : useReducer 是 useState 的一种替代性写法，让代码更容易维护及拓展
    - useState :适合定义一些简单的状态(字符串、数值型、布尔型)
    - useReducer : 适合逻辑比较复杂的state(数组或对象等其它复杂的类型等)
*/
import { useReducer } from 'react';
const initialCount = 0;
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return action.payload;

    case 'decrement':
      return action.payload;

    case 'reset':
      return action.payload;

    default:
      return state;
  }
};
const SimpleUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialCount);

  return (
    <>
      Count: {state}
      <div>
        <button
          onClick={() => dispatch({ type: 'reset', payload: initialCount })}
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement', payload: state - 1 })}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'increment', payload: state + 1 })}
        >
          Increment
        </button>
      </div>
    </>
  );
};
export default SimpleUseReducer;
