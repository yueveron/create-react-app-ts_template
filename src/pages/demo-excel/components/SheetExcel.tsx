import type { ReactElement } from 'react';
import { useRef, useState } from 'react';
import { read, utils } from 'xlsx';

interface President {
  Name: string;
  Index: number;
}

const SheetJSReactHTML = (): ReactElement => {
  /* the component state is an HTML string */
  const [__html, setHtml] = useState('');
  /* the ref is used in export */
  const tbl = useRef(null);

  const onUpload = (e: any) => {
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event?.target?.result;
        if (result) {
          const wb = read(result, { type: 'binary' }); // parse the array buffer
          const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
          const data = utils.sheet_to_html(ws); // generate HTML
          const oriData: President[] = utils.sheet_to_json<President>(ws); // generate objects
          setHtml(data); // update state
          console.debug('oriData:', oriData);
        }
      };
      reader.readAsBinaryString(e.target.files[0]);
    }
  };

  return (
    <>
      <input type="file" id="fileUpload" onChange={onUpload} />

      <div ref={tbl} dangerouslySetInnerHTML={{ __html }} />
    </>
  );
};

export default SheetJSReactHTML;
