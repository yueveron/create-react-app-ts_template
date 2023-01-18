import '../../styles/globals.scss';
import { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
}

const FormYupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required firstName'),
  lastName: Yup.string().required('Required LastName'),
  email: Yup.string().email('Invalid email'),
});

const initialFormValues:IValues = {
  firstName: 'Jack',
  lastName: '',
  email: '',
};

const DemoFormik = () => {
  useEffect(()=>{
    console.debug('DemoFormik');
  }, []);
  // const manualOnSubmit = ():void =>{
  //   console.debug('manualOnSubmit');
  // };
  return (
    <div className="mainWrapper">
      <h3>Demo Formik</h3>
      <Formik
        initialValues = {initialFormValues}
        validationSchema = {FormYupSchema}
        // onSubmit trigger by handleSubmit
        onSubmit={(values: IValues):void => {
          console.debug('submit:', values);
        }}
      >
        {({errors, touched, handleSubmit, validateForm, submitForm}) => (
         <form onSubmit={handleSubmit}>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <button type="submit">Submit</button>

            <button type='button' onClick = {()=>{
              // validateForm() must be trigger after submitForm(), otherwise not style error item
              submitForm().then(async():Promise<any> => {
                const resultErrors = await validateForm(); // 关键 KeyPoint
                if(Object.keys(resultErrors).length>0) alert('Some data fields are missing');
              });
            }}>
              Manuanl Submit
            </button>
          </form>
        )}
        
      </Formik>
    </div>
  );

};
export default DemoFormik;