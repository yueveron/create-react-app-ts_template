import '../../styles/globals.scss'; // 全局引入 scss
import { useEffect } from 'react';
//
import { useTabStore } from './hooks/states';
import ChildComp from './component/ChildComp';

const DemoZustand = () => {
  const {votes, chequeData, setChequeData, setVotes, updateTrusteeDataItem} = useTabStore((state:any)=> ({
    votes : state.votes,
    chequeData: state.chequeData,
    setChequeData: state.setChequeData,
    setVotes: state.setVotes,
    updateTrusteeDataItem: state.updateTrusteeDataItem,
  }));
  useEffect(()=>{
    // console.debug('DemoZustand:');
  }, []);
  //
  const clkChangeChequeData = () => {
    setChequeData(['1', '2' , '3']);
    setVotes('5');
  };
  //
  const clkChangeTab = () => {
    updateTrusteeDataItem({tabName:'tab_2'});
  };

  const listItems = chequeData.map((number:any) =>
    <li key={number}>{number}</li>
  );

  return (
    <div className="mainWrapper">
      <h3>Demo Zustand</h3>
      <p> state of Votes : {votes} </p>
      <p> state of List chequeData :</p>
      <ul>{listItems}</ul>
      <div>
        <button onClick={clkChangeChequeData}>
          Change
        </button>
        <button onClick={clkChangeTab}>Tab</button>
      </div>
      <div>
        <ChildComp/>
      </div>
    </div>
  );

};
export default DemoZustand;