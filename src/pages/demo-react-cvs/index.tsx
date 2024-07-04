import { useRef } from 'react';
import CsvExport from './components/csv-export';
import { CSVLink } from 'react-csv';

const DemoCvs = () => {
  const csvRef = useRef(null);
  return (
    <>
      DemoCvs
      <CsvExport
        csvRef={csvRef}
        fileName="result-list"
        csvHeader={[
          { label: 'NumberId', key: 'id' },
          { label: 'Name', key: 'name' },
        ]}
        data={[{ id: '1', name: 'Mario' }]}
      />
      <CSVLink
        data={[{ id: '1', name: 'Mario' }]}
        headers={[
          { label: 'NumberId', key: 'id' },
          { label: 'Name', key: 'name' },
        ]}
        filename="aa.csv"
        ref={csvRef}
      />
    </>
  );
};

export default DemoCvs;
