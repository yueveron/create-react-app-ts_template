/* eslint-disable */
// ts-nocheck disables type checking for entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import '../../styles/globals.scss'; // 全局引入 scss
import style from './hero.module.scss'; // 局部模块引入 scss
import { useEffect } from 'react';
import { cloneDeep, omitBy, isEmpty } from 'lodash';
// import { cloneDeep } from 'lodash';
/**
 * 定义了一个Interface类型Props，它指定了我们组件要用到的属性。
 * name是必需的且为string类型，同时enthusiasmLevel是可选的且为number类型 （你可以通过名字后面加?为指定可选参数）
*/
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const tempObjs: any = {
  f: [
    { a: '', b: '' },
    { a: 1, b: '' },
  ],
  c:{e:'', d:{f:{w:'', t:'1'}, g:{a:'', b:''}}, list:[{a:'1', b:'1'},{a:'',b:''},{a:'2',b:''}]},
  // b: { name: '', temp:{a:'', c:{list:[{a:'',b:''},{a:'',b:''}],d:''}}, list:[{a:'',b:''},{a:'1',b:''}]},
  // d: { name: '1', age: '', sex:[{a:'',b:'1'},{a:'',b:''}]},
};

/**
 * Get nest object : remove empty item and empty array
*/
const getRemoveEmptyObject = (data:any):any => {
  if (typeof data !== "object") {
    return data;
  }
  return Object.keys(data).reduce(function (accumulator, key) {
    const isObject:any = data[key] !== null && typeof data[key] === "object" ;
    let value:any = isObject ? getRemoveEmptyObject(data[key]) : data[key];
    const isEmptyObject = (isObject && !Object.keys(value).length && Array.isArray(value));
    if (value === undefined || isEmptyObject || value === '' ) {
      return accumulator;
    }
    if (Array.isArray(data[key])) {
      value = Object.values(value);
    }
    return Object.assign(accumulator, { [key]: value });
  }, {});
};

const isObject = (obj:any) => obj != null && obj.constructor.name === "Object";
function getKeys(obj:any, keepObjKeys:any, skipArrays:any, keys=[], scope=[]) {
  if (Array.isArray(obj)) {
    if (!skipArrays) scope.push('[' + obj.length + ']');
    obj.forEach((o) => getKeys(o, keepObjKeys, skipArrays, keys, scope), keys);
  } else if (isObject(obj)) {
    Object.keys(obj).forEach((k) => {
      if ((!Array.isArray(obj[k]) && !isObject(obj[k])) || keepObjKeys) {
        let path = scope.concat(k).join('.').replace(/\.\[/g, '[');
        if (!keys.includes(path)) keys.push(path);
      }
      getKeys(obj[k], keepObjKeys, skipArrays, keys, scope.concat(k));
    }, keys);
  }
  return keys;
}

function simple(obj:any) {
  for (var i in obj) {
    if (typeof obj[i] === "object") {
      simple(obj[i]);
    } else {
      if (obj[i] == '') delete obj[i]
    }
  }
}

const DemoTs = ({ name, enthusiasmLevel = 1 }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  useEffect(()=>{
    // console.debug('useEffect');
    // 调用方法
    const empty1 = getRemoveEmptyObject(tempObjs);
    console.debug('tempObjs:', tempObjs)
    // simple(tempObjs)
    console.debug('empty1:', empty1);
    console.debug('getOwnPropertyNames:', getKeys(empty1)); 
  }, []);

  return (
    // mainWrapper - 全局 class
    <div className="mainWrapper">
      <div className="greeting">
        Hello : {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      {/*
          *.mouule.scss 局部引入后，会限制 class 作用域，编译后如下
          <div class="hero_listWrapper__jwCqZ">List Items</div>
      */}
      <div className={style.listWrapper}>
        List Items
        <h3 className={`${style.title} ${style.red}`}>
          标题-英超8月6日新赛季开启 Premier League
          <p className={style.text}>哈哈哈哈哈哈</p>
        </h3>
      </div>
    </div>
  );
};

export default DemoTs;

const getExclamationMarks = (numChars: number) => {
  // console.debug(numChars, Array(numChars + 1).join('!'));
  return Array(numChars + 1).join('!');
};