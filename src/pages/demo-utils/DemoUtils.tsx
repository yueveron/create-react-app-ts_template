/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import '../../styles/globals.scss';
import {
  getLoopObject,
  getEntiresObjValues,
  getArraySumByField,
  geyIsNotEmptyArray,
  exampleObjectReplaceSwitch,
  getModifiedValues,
} from './utils/tools';
const DemoUtils = () => {
  useEffect(() => {
    exampleObjectReplaceSwitch();
    const resObj = {
      a: '0',
      b: {
        bat: 'b-0',
        bac: 'b-1',
        bchild: {
          bs: 'bs',
          bc: {
            bcc: 'bcc',
          },
        },
      },
    };
    // console.debug('ori:-', resObj);
    // console.debug(getEntiresObjValues(resObj));

    getLoopObject(resObj);
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
    console.debug('compare modified key:', resultObj);
  }, []);

  return (
    <div className="mainWrapper">
      <h3>Demo Utils</h3>
    </div>
  );
};
export default DemoUtils;
