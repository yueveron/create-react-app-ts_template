/**
 * React 的官方说法 : useReducer 是 useState 的一种替代性写法，让代码更容易维护及拓展
    - useState :适合定义一些简单的状态(字符串、数值型、布尔型)
    - useReducer : 适合逻辑比较复杂的state(数组或对象等其它复杂的类型等)
*/
import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  data: null,
  error: false,
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: false,
      };

    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: true,
      };

    default:
      return state;
  }
};
const SimpleUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts/1'
        );
        if (response.status === 200) {
          dispatch({ type: 'SUCCESS', payload: response.data });
        }
      } catch (error) {
        console.debug('error', error);
        throw error;
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Title: {state.data.title}</h1>
          <p>Content : {state.data.body}</p>
        </div>
      )}
      {state.error && <p>Error occured</p>}
    </>
  );
};
export default SimpleUseReducer;
