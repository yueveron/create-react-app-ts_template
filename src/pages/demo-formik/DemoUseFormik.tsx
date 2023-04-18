/* eslint-disable react-hooks/exhaustive-deps */
import '../../styles/globals.scss';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  const [originData, setOriginData] = useState<any>({});

  useEffect(() => {
    const resData = {
      firstName: 'jack',
      lastName: 'ting',
      email: 'abc@gmail.com',
    };
    assignApiValueToForm(resData);
  }, []);

  const assignApiValueToForm = (resData: any): void => {
    setOriginData(resData);
    // use setFieldValue(keyName, value) to set form.field value
    for (const field in resData) {
      formikInstance.setFieldValue(field, resData[field]);
    }
  };
  const formikInstance = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.debug('originData:', originData);
      console.debug('submit:', values);
    },
  });
  return (
    <div className="mainWrapper">
      <h3>Demo Formik</h3>
      <form onSubmit={formikInstance.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        {/*
            name : 必须与 initialValues 内的 keyName 一致
            onChange : 双向绑定，如无将不能改变值
            value : form.field 绑定的值
         */}
        <input
          name="firstName"
          type="text"
          onChange={formikInstance.handleChange}
          value={formikInstance.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          onChange={formikInstance.handleChange}
          value={formikInstance.values.lastName}
        />
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          type="email"
          onChange={formikInstance.handleChange}
          value={formikInstance.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
