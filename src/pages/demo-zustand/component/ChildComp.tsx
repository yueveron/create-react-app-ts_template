import { useTabStore } from '../hooks/states';
const ChildComp = () => {
  const {chequeData, votes, trusteeData} = useTabStore((state:any)=> ({
    votes: state.votes,
    chequeData: state.chequeData,
    trusteeData: state.trusteeData,
  }));
  const listItems = trusteeData.map((item:any) =>
    <li key={item.name}>
      {item.name}
      isGetData : <b>{item.isGetData ? 'true' : 'false'}</b>.
    </li>
  );
  return (
    <div>
      <h4>Chid of Component</h4>
      <p>votes:{votes}</p>
      <p> state of List chequeData : {chequeData.length} </p>
      <p> trusteeData : {trusteeData.length}</p>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};
export default ChildComp;