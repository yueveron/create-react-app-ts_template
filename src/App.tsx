/* eslint-disable no-unused-vars */
import './App.css';
// import DemoZustand from './pages/demo-zustand/DemoZustand';
import { DemoUseFormik, DemoFormik } from './pages/demo-formik';
import {
  DemoUseDispalyList,
  DemoUseCopyToClipboard,
  DemoUseKeyBoard,
  DemoUseReducerSimple,
} from './pages/demo-customhooks/DemoCustomHooks';
// import DemoReactQuery from './pages/demo-react-query/DemoReactQuery';
// import DemoReactTest from './pages/demo-react-test/DemoReactTest';
// import DemoUtils from './pages/demo-utils/DemoUtils';
import DemoTs from './pages/demo-typescript/DemoTs';
import DemoChildren from './pages/demo-children/DemoUse';
import DemoComposition from './pages/demo-composition/DemoComposition';
function App() {
  return (
    <div className="App">
      {/* <DemoZustand/> */}
      {/* <DemoUseFormik /> */}
      {/* <DemoUseCopyToClipboard /> */}
      {/* <DemoUseDispalyList /> */}
      {/* <DemoReactQuery /> */}
      {/* <DemoReactTest title="React Test" /> */}
      {/* <DemoUtils /> */}
      {/* <DemoTs hobbies="football" /> */}
      {/* <DemoUseKeyBoard /> */}
      {/* <DemoUseReducerSimple /> */}
      {/* <DemoChildren /> */}
      {/* <DemoComposition /> */}
      <DemoFormik />
    </div>
  );
}

export default App;
