import type { ReactElement } from 'react';
import { useRef, useState, useEffect } from 'react';
import { read, utils } from 'xlsx';
import { getResultList } from '../utils';
// import { mockMainList, mockTargetList } from '../mock';

// const mockResultList = getResultList(mockMainList, mockTargetList);
const SheetJSReactHTML = (): ReactElement => {
  const [disableBtnSearch, setDisableBtnSearch] = useState(true);
  const [faceDataJson, setFaceDataJson] = useState(null);
  const [targetDataJson, setTargetDataJson] = useState(null);

  const [faceDataHtml, setFaceDataHtml] = useState('');
  const [targetDataHtml, setTargetDataHtml] = useState('');
  const [resultDataHtml, setResultDataHtml] = useState('');

  const tblFaceData = useRef(null);
  const tblTargetData = useRef(null);
  const tblResultData = useRef(null);

  const onUpload = (e: any) => {
    const fileType = e?.target?.id ?? '';
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event?.target?.result;
      if (result) {
        const wb = read(result, { type: 'binary' }); // parse the array buffer
        const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
        const jsonData = utils.sheet_to_json<any>(ws);
        const htmlData = utils.sheet_to_html(ws);
        cacheData(fileType, jsonData);
        renderHtml(fileType, htmlData);
      }
    };
    reader.readAsBinaryString(e.target.files[0]);
  };

  const cacheData = (type: string, jsonData: any) => {
    if (type === 'faceFile') setFaceDataJson(jsonData);
    if (type === 'targetFile') setTargetDataJson(jsonData);
  };

  const renderHtml = (type: string, htmlData: any) => {
    if (type === 'faceFile') setFaceDataHtml(htmlData);
    if (type === 'targetFile') setTargetDataHtml(htmlData);
    if (type === 'resultFile') setResultDataHtml(htmlData);
  };

  const handleSearch = () => {
    console.debug('handleSearch:', faceDataJson, targetDataJson);
    if (faceDataJson && targetDataJson) {
      const resultList = getResultList(faceDataJson, targetDataJson);
      console.debug('resultList:', resultList);
      const resultSheet = utils.json_to_sheet(resultList);
      const htmlData = utils.sheet_to_html(resultSheet);
      renderHtml('resultFile', htmlData);
    }
  };

  useEffect(() => {
    if (faceDataJson && targetDataJson) {
      setDisableBtnSearch(false);
    }
  }, [faceDataJson, targetDataJson]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: '20px',
          padding: '10px',
        }}
      >
        <div style={{ width: '50%', borderRight: '1px solid #000' }}>
          <div>
            <h3 style={{ textAlign: 'center' }}>Face Table</h3>
            <input type="file" id="faceFile" onChange={onUpload} />
            <div
              ref={tblFaceData}
              dangerouslySetInnerHTML={{ __html: faceDataHtml }}
            />
          </div>
        </div>
        <div style={{ width: '50%' }}>
          <div>
            <h3 style={{ textAlign: 'center' }}>Target Table</h3>
            <input type="file" id="targetFile" onChange={onUpload} />
            <div
              ref={tblTargetData}
              dangerouslySetInnerHTML={{ __html: targetDataHtml }}
            />
          </div>
        </div>
      </div>
      <hr></hr>

      <div style={{ width: '100%' }}>
        <div>
          <button disabled={disableBtnSearch} onClick={handleSearch}>
            查询
          </button>
          <h3 style={{ textAlign: 'center' }}>查询结果 Table</h3>
          <div
            ref={tblResultData}
            dangerouslySetInnerHTML={{ __html: resultDataHtml }}
          />
        </div>
      </div>
    </>
  );
};

export default SheetJSReactHTML;
