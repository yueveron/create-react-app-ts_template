import { render, cleanup, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import DemoTest from '../DemoReactTest';

afterEach(cleanup);

test('test DemoReactTest', () => {
  const title = 'react test title';
  act(() => {
    render(<DemoTest title={title} />);
  });
  const titleEle = screen.getByText(title);
  expect(titleEle).toBeInTheDocument();
});
