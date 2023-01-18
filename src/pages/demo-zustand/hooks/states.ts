import create from 'zustand';
import { find } from 'lodash';
export const useTabStore = create((setState) => ({
  votes: 1,
  chequeData:[],
  trusteeData:[
    {name:'tab_1', isGetData:false},
    {name:'tab_2', isGetData:false},
  ],
  setVotes:(input:any)=>{
    setState(() => ({votes: input }));
  },
  setChequeData: (data: any) => {
    setState(() => ({
      chequeData: [...data],
    }));
  },
  updateTrusteeDataItem:(item:any) => {
    console.debug('tabName:', item);
    setState((state:any) => {
      console.debug(state);
      const copyData = [...state.trusteeData]; // copy the array
      const tabItem:any = find(copyData, ['name', item.tabName]);
      tabItem.isGetData = true;
      return {
        trusteeData: [...copyData]
      };
    });
  },
}));