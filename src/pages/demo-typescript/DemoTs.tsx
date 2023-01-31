import { useEffect, useState } from 'react';
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
// interface 定义对象类型
interface IPerson {
  name: string;
  age?: number;
}
let personOne: IPerson = {
  name: 'Tom',
};

// 多种类型
let age: number | string;
age = 5;
age = 'tom';
// 使用 unknown 代替 any
let personName: unknown;
personName = 'Tom';
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

const DemoTs = () => {
  const [title, setTitle] = useState<string>();
  useEffect(() => {
    setTitle('Demo of Typescript');
  }, []);
  return (
    <>
      <h3>{title}</h3>
    </>
  );
};
export default DemoTs;
