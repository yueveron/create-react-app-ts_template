import '../../styles/globals.scss'; // 全局引入 scss
import style from './hero.module.scss'; // 局部模块引入 scss
/**
 * 定义了一个Interface类型Props，它指定了我们组件要用到的属性。
 * name是必需的且为string类型，同时enthusiasmLevel是可选的且为number类型 （你可以通过名字后面加?为指定可选参数）
*/
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const DemoTs = ({ name, enthusiasmLevel = 1 }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }


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
  console.debug(numChars, Array(numChars + 1).join('!'));
  return Array(numChars + 1).join('!');
};