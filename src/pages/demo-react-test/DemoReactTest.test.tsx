/**
 * cli - 测试指定文件 : npm run test -- --runTestsByPath "src\pages\demo-react-test\DemoReactTest.test.tsx"
 * cli - 测试指定文件并 coverage : npm run test:coverage -- --runTestsByPath "src\pages\demo-react-test\DemoReactTest.test.tsx"
 *   - coverage 指定文件在 package.json : jest.collectCoverageFrom 设置
 */
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DemoTest from './DemoReactTest';

describe('Test', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('test DemoReactTest', () => {
    const title = 'react test title';
    render(<DemoTest title={title} />);
    console.debug('DemoReactTest');
    const titleEle = screen.getByText(title);
    expect(titleEle).toBeInTheDocument();
  });
});
