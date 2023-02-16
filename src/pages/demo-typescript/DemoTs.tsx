import { useEffect, useState, useRef } from 'react';
import '../../styles/globals.scss';

const name: string = 'Tom';
const hobbies: string[] = ['Tom', 'Jack'];
// Type of Tuple, Tuple can contain two values of different data types
let role: [number, string];
role = [5, 'Tom'];
// type 定义对象类型
type TPerson = {
  name: string;
  age: number;
};
let person: TPerson = {
  name: 'Tom',
  age: 5,
};
let listPersons: TPerson[] = [{ name: 'Tom', age: 5 }];
// type extend 类型继承
type X = { a: string; b: number };
type Y = X & { c: string };
let y: Y = { a: 't', b: 5, c: 'ss' };
console.debug('y:', y);
// interface 定义对象类型
interface IPerson {
  name: string;
  age?: number;
}
let personOne: IPerson = {
  name: 'Tom',
};
// interface extend 类型继承
interface IGuy extends IPerson {
  profession: string;
}
let guyOne: IGuy = { name: 'Sky', profession: 'player' };
console.debug('guyOne:', guyOne);
// interface 还可以 extend type
interface ISuperMan extends X {
  profession: string;
}
let superManOne: ISuperMan = { profession: 'cartoon', a: 't', b: 5 };
console.debug('ISuperMan:', superManOne);
// 多种类型
let age: number | string;
age = 5;
age = 'tom';
// 使用 unknown 代替 any
let personName: unknown;
personName = 'Tom';
// object 类型
let temp: object = {};
temp = { b: 's' };
console.debug('temp:', temp);
//
console.debug(
  name,
  hobbies,
  role,
  person,
  listPersons,
  age,
  personName,
  personOne
);

/**
 * TS - React Component : 没必要使用 `React.FC` 定义类型，会造成 eslint react/prop-types
 */
interface demoTsProps {
  hobbies: string;
}
interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
}
const DemoTs = ({ hobbies }: demoTsProps) => {
  // TS - useState : use useState<type>('')
  const [todos, setTodos] = useState<ITodo[]>([]);
  // TS - useRef : use useRef<type>(null)
  const divRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.debug('todos:', todos);
  }, [todos]);
  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    divRef.current!.style.backgroundColor = 'grey';
    divRef.current?.blur();
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: 'new todo message',
        isDone: false,
      },
    ]);
  };
  return (
    <>
      <h3>{hobbies}</h3>
      <button onClick={handleAdd}>add todo</button>
      <div ref={divRef}>Test useRef</div>
    </>
  );
};

export default DemoTs;
