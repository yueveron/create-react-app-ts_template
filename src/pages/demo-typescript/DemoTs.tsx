/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react';
import '../../styles/globals.scss';
// import SimpleUseReducer from './pages/SimpleUseReducer';
// import FetcherUseReducer from './pages/FetcherUseReducer';
import Form from './components/Form/Form';
//
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
// console.debug('y:', y);
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
// console.debug('guyOne:', guyOne);
// interface 还可以 extend type
interface ISuperMan extends X {
  profession: string;
}
let superManOne: ISuperMan = { profession: 'cartoon', a: 't', b: 5 };
// console.debug('ISuperMan:', superManOne);
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
// console.debug('temp:', temp);
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

interface IFund {
  dto?: IDto;
}

interface IDto {
  code?: string | null;
  name?: string | null;
  age?: string | null;
}

const getFormatValue = <T,>(value: T): string | T => {
  if (value === null) return '-';
  if (typeof value === 'string' && value === '') return '-';
  return value;
};

/** Example of interface 泛型 */
interface LabelValue {
  label: string;
  value: string;
}

interface IOptionTeams {
  chelse: LabelValue;
  brighton: LabelValue;
}

// 接口接收泛型
interface ISoccer<T> {
  name: string;
  optionsTeamObj: T;
}

const getTeamLabel = <T,>(props: ISoccer<T>): string => {
  const { name, optionsTeamObj } = props;
  const keyName = 'chelse';
  const optionObj = optionsTeamObj[keyName as keyof T] as unknown as LabelValue;
  const teamLabel = optionObj.label;
  return `${name} : ${teamLabel}`;
};

/** 泛型函数 */
interface ISumField {
  name: string;
  value: number;
}
const getArraySumByField = <T,>(list: T[], field: string): number => {
  let sum = 0;
  list.forEach((element): void => {
    sum += Number(element[field as keyof T]) ?? 0;
  });
  return sum;
};

interface ITest1 {
  title: string;
  name: string;
}

interface ITest2 {
  title: string;
  name: string;
}

let test1: ITest2 = { title: '2', name: '322' };
const test2: ITest1 = { title: '2', name: '32' };
test1 = test2;
console.debug('test1:', test1);
const DemoTs = ({ hobbies }: demoTsProps) => {
  // TS - useState : use useState<type>('')
  const [todos, setTodos] = useState<ITodo[]>([]);
  // TS - useRef : use useRef<type>(null)
  const divRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    // console.debug('todos:', todos);
    const fundInfo: IFund = {
      dto: {
        code: null,
        name: 'jack',
        age: '2',
      },
    };
    const listKey = ['code', 'name', 'age'];
    listKey.forEach((keyName): void => {
      if (fundInfo.dto?.[keyName as keyof IDto])
        fundInfo.dto[keyName as keyof IDto] =
          'm-' + fundInfo.dto[keyName as keyof IDto];
    });
    // console.debug('dto :', fundInfo.dto);
    const mockObj = {
      name: 5,
      title: null,
    };
    // console.debug(getFormatValue(mockObj.name));
    // console.debug(getFormatValue(mockObj.title));

    /** use 泛型函数 */
    const sumTotal = getArraySumByField<ISumField>(
      [
        { name: 'one', value: 1 },
        { name: 'two', value: 2 },
      ],
      'value'
    );
    console.debug('sumTotal:', sumTotal); // output->3

    /** use interface 泛型  */
    const optionsTeam: IOptionTeams = {
      chelse: { label: 'chelse team', value: 'CS' },
      brighton: { label: 'brighton team', value: 'BT' },
    };
    console.debug(
      getTeamLabel<IOptionTeams>({
        name: 'This team is',
        optionsTeamObj: optionsTeam,
      })
    );
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
      <h3>Props: {hobbies}</h3>
      {/* <button onClick={handleAdd}>add todo</button> */}
      {/* <div ref={divRef}>Test useRef</div> */}
      {/* <h4>Demo of useReducer</h4> */}
      {/* <SimpleUseReducer />
      <FetcherUseReducer /> */}
      {/* <Form /> */}
    </>
  );
};

export default DemoTs;
