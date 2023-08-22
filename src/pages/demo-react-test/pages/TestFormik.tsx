import React from 'react';
import { Formik, Field, Form } from 'formik';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const MyForm = () => {
  const [counter, setCounter] = React.useState('Init');

  const handleSubmit = async (values: any) => {
    await sleep(500);
    const { firstName } = values;
    setCounter(firstName);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <span data-testid="counter">{counter}</span>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form data-testid="test-form">
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default MyForm;
