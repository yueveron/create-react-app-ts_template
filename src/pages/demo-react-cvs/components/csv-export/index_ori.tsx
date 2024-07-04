import type { ReactElement } from 'react';
import type { CommonPropTypes } from 'react-csv/components/CommonPropTypes';
import { CSVLink } from 'react-csv';

/**
 * object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined之外的类型。
 * object 为 TSV2.2 引入的新类型，表示正式对象类型，可以为对象，数组，函数 : {}, {name:'abc'}, [1,2,3], ()=>{return 1}
 * <T extends object>，表示泛型 extends 一个 object 类型
 */
const CsvExport = (props: CommonPropTypes): ReactElement => {
  const { ...rest } = props;
  return <CSVLink {...rest} />;
};

export default CsvExport;
