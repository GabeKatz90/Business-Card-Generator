import React from "react";
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import * as Yup from 'yup';

// Reference: https://www.youtube.com/watch?v=khGypss-RJs&t=214s
const FormContainer = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      designation: "",
      email: "",
      linkedin_Username: "",
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

  return (
    <div>
      <h1>Your Details:</h1>
        
      <form onSubmit={formik.handleSubmit}>
        
        <TextField 
          label="First Name" 
          id="firstName" 
          name="firstName" 
          variant="outlined"
          value={formik.values.firstName}
          onChange={formik.handleChange}
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

        <TextField 
          label="LinkedIn (Username)" 
          id="linkedin_Username" 
          name="linkedin_Username" 
          variant="outlined"
          value={formik.values.linkedin_Username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField>
        <div className="error">
          {formik.errors.linkedin_Username && formik.touched.linkedin_Username && formik.errors.linkedin_Username}
        </div>

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
        color="success">
          Generate Card
        </Button>
      </form>
    </div>
  )
}

export default FormContainer;