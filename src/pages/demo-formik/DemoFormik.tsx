import '../../styles/globals.scss';
import { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

// 正在表达式 , eg:100-100-1000
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const FormYupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required firstName'),
  lastName: Yup.string().required('Required LastName'),
  email: Yup.string().email('Invalid email'),
  phoneNumber: Yup.string()
    .matches(phoneRegex, 'Invalid phone')
    .required('Phone is required'),
});

const initialFormValues: IValues = {
  firstName: 'Jack',
  lastName: '',
  email: '',
  phoneNumber: '',
};

const DemoFormik = () => {
  useEffect(() => {
    console.debug('DemoFormik');
  }, []);
  // const manualOnSubmit = ():void =>{
  //   console.debug('manualOnSubmit');
  // };
  return (
    <div className="mainWrapper">
      <h3>Demo Formik</h3>
      <Formik
        initialValues={initialFormValues}
        validationSchema={FormYupSchema}
        // onSubmit trigger by handleSubmit
        onSubmit={(values: IValues): void => {
          console.debug('submit:', values);
        }}
      >
        {({ errors, touched, handleSubmit, validateForm, submitForm }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="firstName" placeholder="please input firstName" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <Field name="lastName" placeholder="please input lastName" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </div>
            <div>
              <Field
                name="email"
                type="email"
                placeholder="please input email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              <Field
                name="phoneNumber"
                placeholder="please input phoneNumber"
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
            </div>
            <div>
              <button type="submit">Submit</button>
              <button
                type="button"
                onClick={() => {
                  // validateForm() must be trigger after submitForm(), otherwise not style error item
                  submitForm().then(async (): Promise<any> => {
                    const resultErrors = await validateForm(); // 关键 KeyPoint
                    if (Object.keys(resultErrors).length > 0)
                      alert('Some data fields are missing');
                  });
                }}
              >
                Manuanl Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default DemoFormik;
