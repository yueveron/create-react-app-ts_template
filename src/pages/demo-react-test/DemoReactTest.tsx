import { ReactElement } from 'react';
import '../../styles/globals.scss';
import TestFormik from './pages/TestFormik';
interface IProps {
  title: string;
}
const DemoReactTest = (props: IProps): ReactElement => {
  const { title } = props;
  return (
    <>
      <h3>Demo of React Test</h3>
      <h4>{title}</h4>
      <TestFormik />
    </>
  );
};
export default DemoReactTest;
