import React from 'react';
import s from './First.module.css'
import { Formik, Form } from 'formik';

const FirsComponent = (props) => {
  return (
    <div className="App">
      <Formik
      initialValues={{
        name: props.name,
        year: props.year,
        level: props.level
      }}
      onSubmit={(values) => {
        props.onSubmit(values)
      }}>
        {({
          values,
          handleChange,
          handleBlur
        }) => {
          props.onSubmit(values)
          return <Form style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> 
            <p>{values.level}</p>
            <input 
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{marginBottom: '20px'}} />
            <input 
              name="year"
              value={values.year}
              onChange={handleChange}
              onBlur={handleBlur} />
              <pre>
                {JSON.stringify(values, null, 2)}
              </pre>
          </Form>
        }
        }
      </Formik>
    </div>
  );
}

export default FirsComponent;