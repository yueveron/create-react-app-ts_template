import moment from 'moment';

export const testFunc = () => {
  const DATE_FORMAT = 'YYYY-MM-DD HH:mm';
  // const timeOne = '2024-04-26 22:01';
  // const timeOne = '2024-04-26 22:15:00';
  const timeOne = '2024/04/26 8:15:10';
  const timeTwo = '2024-04-26 8:15:00';

  console.debug('timeOne:', moment(timeOne).format(DATE_FORMAT));
  console.debug(new Date(timeOne).getTime(), new Date(timeTwo).getTime());
};

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

const getPersonCheckResult = (checkItem: any, targetList: any[]): any => {
  const searchName = checkItem.name;
  const infoList = targetList.filter((elem) => {
    const strNames = `${elem.jinKeList}、${elem.otherList}`;
    return strNames.includes(searchName);
  });
  let isValid = false;
  let validElem = null;
  for (const elem of infoList) {
    isValid = isBetweenTime(checkItem.time, elem.enterTime, elem.leaveTime);
    validElem = elem;
    if (isValid) break;
  }
  const targetId = isValid ? validElem?.id : '-';
  const resultItem = { ...checkItem, isValid, workId: targetId };
  return resultItem;
};

export const getResultList = (checkList: any[], targetList: any[]): any[] => {
  const processList = checkList.map((elem) => {
    const personResult = getPersonCheckResult(elem, targetList);
    return personResult;
  });
  return processList;
};

export const getExcelName = (prefix = ''): string => {
  const DATE_FORMAT = 'YYYY-MM-DD HH:mm';
  const formatCurrDate = moment(new Date()).format(DATE_FORMAT);
  return `${prefix}${formatCurrDate}.xlsx`;
};
