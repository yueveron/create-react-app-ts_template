import type { ReactElement } from 'react';

const ListItems = (props: {
  listDatas: { id: string; name: string }[];
}): ReactElement => {
  const { listDatas } = props;
  return (
    <>
      {listDatas.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </>
  );
};

const myItems = [
  { id: '1', name: 'Man' },
  { id: '2', name: 'Liv' },
];
const UseWrapper = (): ReactElement => {
  return (
    <>
      <p>Render List Items</p>
      <div style={{ width: '300px', margin: '0 auto', textAlign: 'left' }}>
        <ListItems listDatas={myItems} />
        <ListItems listDatas={myItems} />
      </div>
    </>
  );
};

export default UseWrapper;
