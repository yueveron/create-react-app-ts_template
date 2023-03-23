import { act } from 'react-dom/test-utils';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import MyForm from '../pages/TestFormik';

afterEach(cleanup);

test('test Formik form', async () => {
  act(() => {
    render(<MyForm />);
  });

  const user = userEvent.setup();
  // use type() to insert some text into an input field or textarea
  await user.type(screen.getByRole('textbox', { name: /first name/i }), 'John');
  await user.type(screen.getByRole('textbox', { name: /last name/i }), 'Dee');
  await user.type(
    screen.getByRole('textbox', { name: /email/i }),
    'john.dee@someemail.com'
  );
  await user.click(screen.getByRole('button', { name: /submit/i }));

  const titleEle = screen.getByTestId('counter');
  expect(titleEle).toHaveTextContent('Init');
  await waitFor(() => {
    expect(titleEle).toHaveTextContent('John');
  });
});
