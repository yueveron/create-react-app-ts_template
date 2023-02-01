import './App.css';
// import DemoZustand from './pages/demo-zustand/DemoZustand';
// import DemoFormik from './pages/demo-formik/DemoFormik';
import {
  DemoUseDispalyList,
  DemoUseCopyToClipboard,
} from './pages/demo-customhooks/DemoCustomHooks';
// import DemoTs from './pages/demo-typescript/DemoTs';
function App() {
  return (
    <div className="App">
      {/* <DemoZustand/> */}
      {/* <DemoFormik /> */}
      <DemoUseCopyToClipboard />
      <DemoUseDispalyList />
      {/* <DemoTs /> */}
    </div>
  );
}

export default App;
