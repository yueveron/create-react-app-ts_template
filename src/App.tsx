/* eslint-disable no-unused-vars */
import './App.css';
// import DemoZustand from './pages/demo-zustand/DemoZustand';
import { DemoUseFormik, DemoFormik } from './pages/demo-formik';
// import {
//   DemoUseDispalyList,
//   DemoUseCopyToClipboard,
// } from './pages/demo-customhooks/DemoCustomHooks';
// import DemoTs from './pages/demo-typescript/DemoTs';
// import DemoReactQuery from './pages/demo-react-query/DemoReactQuery';
// import DemoReactTest from './pages/demo-react-test/DemoReactTest';
// import DemoUtils from './pages/demo-utils/DemoUtils';
function App() {
  return (
    <div className="App">
      {/* <DemoZustand/> */}
      <DemoUseFormik />
      {/* <DemoUseCopyToClipboard /> */}
      {/* <DemoUseDispalyList /> */}
      {/* <DemoTs hobbies="football" /> */}
      {/* <DemoReactQuery /> */}
      {/* <DemoReactTest title="React Test" /> */}
      {/* <DemoUtils /> */}
    </div>
  );
}

export default App;
