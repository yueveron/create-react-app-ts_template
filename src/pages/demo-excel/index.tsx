import type { ReactElement } from 'react';
import SheetExcel from './components/SheetExcel';
import { mainList, targetList } from './utils';
const isBetweenTime = (
  checkTime: string,
  enterTime: string,
  leaveTime: string
): boolean => {
  const dateCheckTime = new Date(checkTime).getTime();
  const dateEnterTime = new Date(enterTime).getTime();
  const dateLeaveTime = new Date(leaveTime).getTime();
  return dateCheckTime >= dateEnterTime && dateCheckTime <= dateLeaveTime;
};

const getPersonCheckResult = (checkItem: any): any => {
  const searchName = checkItem.name;
  const infoList = targetList.filter((elem) => {
    const strNames = `${elem.jinKeList}、${elem.otherList}`;
    return strNames.includes(searchName);
  });
  let isValid = false;
  for (const elem of infoList) {
    isValid = isBetweenTime(checkItem.time, elem.enterTime, elem.leaveTime);
    if (isValid) break;
  }
  const resultItem = { ...checkItem, isValid };
  return resultItem;
};

const testUtils = () => {
  const processList = mainList.map((elem) => {
    const personResult = getPersonCheckResult(elem);
    return personResult;
  });
  console.debug('processList:', processList);
};

testUtils();

const UseExcelDemo = (): ReactElement => {
  return (
    <>
      <p>Render Excel File</p>
      <SheetExcel />
    </>
  );
};
export default UseExcelDemo;
