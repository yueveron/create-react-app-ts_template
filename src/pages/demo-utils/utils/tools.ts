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

export const getLoopObject = <T extends {}>(obj: T): void => {
  Object.keys(obj).forEach((key) => {
    if (obj[key as keyof {}] === '0') {
      console.debug('equal to 0:', key, obj[key as keyof {}]);
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
  console.debug('a:', obj1['a'] || 'defaultSource'); // output-> a:1
};
