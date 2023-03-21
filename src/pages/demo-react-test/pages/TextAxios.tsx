import React from 'react';
import axios from 'axios';
interface IProps {
  url: string;
}

const TestAxios = ({ url }: IProps) => {
  const [data, setData] = React.useState();

  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data.greeting);
  };

  return (
    <>
      <button onClick={fetchData} data-testid="fetch-data">
        Load Data
      </button>
      {data ? (
        <div data-testid="show-data">{data}</div>
      ) : (
        <h1 data-testid="loading">Loading...</h1>
      )}
    </>
  );
};

export default TestAxios;
