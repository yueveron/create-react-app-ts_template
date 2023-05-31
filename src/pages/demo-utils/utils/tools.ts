/* eslint-disable no-unused-vars */
import { get, set } from 'lodash';
/**
 * Return the array of all value of nest-obj
 * @param {T} obj origin pure nest-obj
 * @return {string[]} arrary of values
 * @example
 * getEntiresObjValues({a: '0', b: { bat: 'b-0'}}) //return ['0', 'b-0']
 */
export const getEntiresObjValues = <T>(obj: T): string[] => {
  const result: string[] = [];
  // o must use any type, because o is a dynamic object
  const recursivelyFindKey = (o: any): void => {
    Object.keys(o).forEach((key): void => {
      if (typeof o[key] === 'object') {
        recursivelyFindKey(o[key]);
      } else {
        const objValue = String(o[key]);
        result.push(objValue);
      }
    });
  };
  recursivelyFindKey(obj);
  return result;
};

export const iterateNestObject = (obj: any): void => {
  const recursivelyFindKey = (o: any): void => {
    Object.keys(o).forEach((key): void => {
      const value = o[key];
      const typeOfValue = value === null ? 'null' : typeof value;
      if (typeof o[key] === 'object' && o[key] !== null) {
        recursivelyFindKey(o[key]);
      } else {
        console.debug(`${key}:${value}, typeof:${typeOfValue}`);
      }
    });
  };
  recursivelyFindKey(obj);
};

export const getLoopObject = <T extends {}>(obj: T): void => {
  Object.keys(obj).forEach((key) => {
    if (obj[key as keyof {}] === '0') {
      // console.debug('equal to 0:', key, obj[key as keyof {}]);
    }
  });
};

/**
 * Return the sum value of loop object[field]
 * @param {T[]} list - array of item is object
 * @param {string} field - field name of item
 * @return {number} sum value
 * @example
 * getArraySumByField([{ ev: 0.5, em: 0 },{ ev: 0.3, em: 0 }],'ev') // return 0.8
 */
export const getArraySumByField = <T>(list: T[], field: string): number => {
  let sum = 0;
  list.forEach((element): void => {
    sum += Number(element[field as keyof T]) || 0;
  });
  return sum;
};

export const geyIsNotEmptyArray = <T>(list: T[]): boolean => {
  return Array.isArray(list) && list.length > 0;
};

export const exampleObjectReplaceSwitch = (): void => {
  const obj1: Record<string, string> = { a: '1', b: '2' };
  // console.debug('a:', obj1['a'] || 'defaultSource'); // output-> a:1
};

/**
 * 扁平化 object key 为一维字符串
 * 注意：如果 object.key 为 array，会被忽略
 */
export const flattenObject = (ob: any): any => {
  const toReturn: any = {};
  for (const i in ob) {
    if (!Object.hasOwn(ob, i)) continue;
    if (Array.isArray(ob[i])) continue;
    if (typeof ob[i] === 'object' && ob[i] !== null) {
      const flatObject = flattenObject(ob[i]);
      for (const x in flatObject) {
        if (!Object.hasOwn(flatObject, x)) continue;
        toReturn[i + '.' + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

/**
 * Compare Two Object, and Set Modified item To Result-Object
 */
export const getModifiedValues = (initialValue: any, submitValue: any): any => {
  const flattened = flattenObject(initialValue);
  // console.debug('flattened:', flattened);
  const result: any = {};
  Object.entries(flattened)?.map((entry) => {
    const [key, oldVal] = entry;
    const newVal = get(submitValue, key);
    if (newVal !== oldVal) {
      set(result, key, newVal);
    }
  });
  return result;
};
