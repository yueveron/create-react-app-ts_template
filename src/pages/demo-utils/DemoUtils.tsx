/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { string } from 'yup';
import '../../styles/globals.scss';
import {
  getLoopObject,
  getEntiresObjValues,
  getArraySumByField,
  geyIsNotEmptyArray,
  exampleObjectReplaceSwitch,
  getModifiedValues,
  // iterateNestObject,
} from './utils/tools';
interface IResObj {
  a?: any;
  b?: {
    bat?: null | string;
    bac?: null | number;
    bchild?: null | {
      bs?: null | boolean;
      list?: any[];
    };
  };
  c?: null | string;
}
const resObj: IResObj = {
  a: new Date('December 17, 1995 03:24:00'),
  b: {
    bac: null,
    bat: ' b-0 ',
    bchild: {
      bs: true,
      list: [
        { name: '1' },
        { name: new Date('December 17, 1995 03:24:00') },
        { name: false },
      ],
    },
  },
  c: 'ss',
};
/**
 *  Deeply recursively object, and modify value of obj[key]
 *  @param {Record<string, any>} origin object
 *  @return {any} new update-value of object
 */
const getProcessDeeplyObject = <T,>(obj: T): T | object | string | null => {
  if (typeof obj !== 'object') return obj;
  // Fix Type of Date
  if (obj instanceof Date) return '2012-11-11';
  // Normal Create Element of [key]: value
  const allKeys = Object.keys(obj || {});
  const nextElement = allKeys.reduce(function (accumulator, key) {
    const isObject: boolean =
      obj?.[key as keyof T] !== null &&
      typeof obj?.[key as keyof T] === 'object' &&
      !(obj instanceof Date);
    let value: any = isObject
      ? getProcessDeeplyObject(obj?.[key as keyof T])
      : obj?.[key as keyof T];
    console.debug('value:', value);
    if (Array.isArray(obj?.[key as keyof T])) {
      // The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
      // const object1 = {0:'a',1: 'b'}; change to => ['a', 'b']
      value = Object.values(value);
    }
    if (typeof value !== 'object' || value === null || value === undefined) {
      // Fix Type of string
      if (typeof value === 'string') {
        value = `${value.trim()}`;
      }
    }
    // 每次迭代 accumulator(存储器) 存储 "obj[key] = value"，迭代完成后返回整合好的新 obj
    return Object.assign(accumulator, { [key]: value });
  }, {});
  return nextElement;
};

/**
 * How to Use Reduce
 * - https://www.redbitdev.com/post/using-array-reduce-with-objects
 */
/** Example-1. Array.reduce - 实现数组元素累加 */
const numbers = [1, 2, 3, 4, 5];
// 0 为 accumlator 的初始值，每次迭代，accumulator = accumulator + number, 最后得到最终 accumulator
const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);
// console.debug('sum:', sum);

/** Example-2. Transform the profiles into an object keyed by the userId
 *  result : {"1": { "name": "Danielle"}, "2": { "name": "Alfredas"}}
 */
const profiles = [
  { userId: 1, name: 'Danielle' },
  { userId: 2, name: 'Alfredas' },
];
const profilesByUserId = profiles.reduce((accumulator, profile) => {
  const { userId } = profile;
  return { ...accumulator, [userId]: profile };
}, {});

/** Example-3. 遍历 object element , 功能等同于 map
 *  result : {"a": "new-aaa","b": "new-bbb"}
 */
const profilesObj: any = {
  a: 'aaa',
  b: 'bbb',
};
const allKeys = Object.keys(profilesObj); // allKeys : ['a', 'b']
const convertObj = allKeys.reduce(function (accumulator, key) {
  const value = `new-${profilesObj[key]}`;
  return Object.assign(accumulator, { [key]: value });
}, {});

// console.debug(convertObj);

const DemoUtils = () => {
  useEffect(() => {
    exampleObjectReplaceSwitch();

    // console.debug('ori:-', resObj);
    // console.debug(getEntiresObjValues(resObj));
    const formatObj = getProcessDeeplyObject(resObj);
    console.debug('getProcessObject:', formatObj);
    // console.debug('originResObj:', resObj);
    // getLoopObject(resObj);
    const listObj = [
      { ev: 0.5, em: 0 },
      { ev: 0.3, em: 0 },
    ];
    // console.debug('sum:', getArraySumByField(listObj, 'ev').toString());
    // console.debug(geyIsNotEmptyArray([]));

    const initialValue = {
      first_name: 'John',
      last_name: 'Doe',
      address: {
        street: 'Sesame',
        zipCode: 1234,
      },
      list: [{ name: 'jack' }, { name: 'jack' }],
    };
    const submitValue = {
      first_name: 'Mary',
      last_name: 'Doe',
      address: {
        street: 'Sesame',
        zipCode: 123,
      },
      list: [{ name: 'jack22' }, { name: 'jack1' }],
    };
    const resultObj = getModifiedValues(initialValue, submitValue);
    // console.debug('compare modified key:', resultObj);
  }, []);

  return (
    <div className="mainWrapper">
      <h3>Demo Utils</h3>
    </div>
  );
};
export default DemoUtils;
