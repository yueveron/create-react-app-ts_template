import type { ReactElement } from 'react';
import type { CommonPropTypes } from 'react-csv/components/CommonPropTypes';
import { CSVLink } from 'react-csv';

type CSVRef = any;
type CSVHeaderProp = {
  label: string;
  key: string;
};
type CSVHeader = CSVHeaderProp[];

interface CsvExportProps<T extends object> extends CommonPropTypes {
  fileName: string;
  data: T[];
  csvRef: CSVRef;
  csvHeader: CSVHeader;
}

/**
 * object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined之外的类型。
 * object 为 TSV2.2 引入的新类型，表示正式对象类型，可以为对象，数组，函数 : {}, {name:'abc'}, [1,2,3], ()=>{return 1}
 * <T extends object>，表示泛型 extends 一个 object 类型
 */
const CsvExport = <T extends object>(
  props: CsvExportProps<T>
): ReactElement => {
  const { fileName, csvRef, csvHeader, data, ...rest } = props;
  return (
    <CSVLink
      {...rest}
      data={data}
      ref={csvRef}
      headers={csvHeader}
      target="_blank"
      filename={`${fileName}.csv`}
    />
  );
};

export default CsvExport;
