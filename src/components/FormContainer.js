import React from "react";
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import * as Yup from 'yup';
import { Polyline } from "@mui/icons-material";
import PrintIcon from '@mui/icons-material/Print';

import Form from 'react-bootstrap/Form';

// Reference: https://www.youtube.com/watch?v=khGypss-RJs&t=214s
const FormContainer = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      designation: "",
      email: "",
      mobile: "",
      telephone: "",
      location: ""
    },
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid Email address'),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required")
    })

    //  Yup is also the same as this code below. Yup is a simplified validation arrangement.
    // validate: (values) => {
    //   const errors = {};
    //   if (!values.email) {
    //     errors.email = "Email is required";
    //   }
    //   if (!values.firstName) {
    //     errors.email = "First name is required";
    //   }
    //   return errors;
    // }
  })

  // Formik API Reference
  //  /** Form values */
  //  values: Values;
  //  /** map of field names to specific error for that field */
  //  errors: FormikErrors<Values>;
  //  /** map of field names to **whether** the field has been touched */
  //  touched: FormikTouched<Values>;
  //  /** whether the form is currently submitting */
  //  isSubmitting: boolean;
  //  /** whether the form is currently validating (prior to submission) */
  //  isValidating: boolean;
  //  /** Top level status state, in case you need it */
  //  status?: any;
  //  /** Number of times user tried to submit the form */
  //  submitCount: number;
  //  }
  
  return (
    <div>
      <p>Business Card Generator</p>
        
      {/* Reference for formik handler: https://formik.org/docs/tutorial */}
      {/* TextField is a MUI Material */}
      <Form onSubmit={formik.handleSubmit}>
        
        <TextField 
          label="First Name" 
          id="firstName" 
          name="firstName" 
          variant="outlined"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          // Reference: https://reactjs.org/docs/events.html
          // The onBlur event handler is called when focus has left the element (or left some element inside of it). 
          // For example, it’s called when the user clicks outside of a focused text input.
          onBlur={formik.handleBlur}
          >
        </TextField>
        <div className="error">
          {formik.errors.firstName && formik.touched.firstName && formik.errors.firstName}
        </div>

        <TextField
          label="Last Name" 
          id="lastName" 
          name="lastName" 
          variant="outlined"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField>
        <div className="error">
          {formik.errors.lastName && formik.touched.lastName && formik.errors.lastName}
        </div>

        <TextField 
          label="Company" 
          id="company" 
          name="company" 
          variant="outlined"
          value={formik.values.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField>
        <div className="error">
          {formik.errors.company && formik.touched.company && formik.errors.company}
        </div>
        
        <TextField 
          label="Designation" 
          id="designation" 
          name="designation" 
          variant="outlined"
          value={formik.values.designation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField>
        <div className="error">
          {formik.errors.designation && formik.touched.designation && formik.errors.designation}
        </div>

        <TextField 
          label="Email" 
          id="email"
          name="email" 
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField>
        <div className="error">
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </div>

        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>

        <TextField 
          label="Mobile" 
          id="mobile" 
          name="mobile" 
          variant="outlined"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField>
        <div className="error">
          {formik.errors.mobile && formik.touched.mobile && formik.errors.mobile}
        </div>

        <TextField 
          label="Telephone" 
          id="telephone" 
          name="telephone" 
          variant="outlined"
          value={formik.values.telephone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >  
        </TextField>
        <div className="error">
          {formik.errors.telephone && formik.touched.telephone && formik.errors.telephone}
        </div>

        <TextField 
          label="Location" 
          id="location" 
          name="location" 
          variant="outlined"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
            
        </TextField>
        <div className="error">
          {formik.errors.location && formik.touched.location && formik.errors.location}
        </div>

        <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        startIcon={<Polyline />}
        >
          Generate Card
        </Button>

        <Button 
        type="submit"
        variant="contained" 
        color="success"
        startIcon={<PrintIcon />}
        disabled
        >
          Print
        </Button>

      </Form>
    </div>
  )
}

export default FormContainer;