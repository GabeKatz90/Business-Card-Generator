import React from "react";

import { useFormik } from "formik";
import * as Yup from 'yup';

// MUI Icon inside TextField
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { Polyline } from "@mui/icons-material";
// import PrintIcon from '@mui/icons-material/Print';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
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
        
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
          <Form.Control
            placeholder="First Name"
            aria-label="firstName"
            aria-describedby="basic-addon1"
            id="firstName" 
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            // Reference: https://reactjs.org/docs/events.html
            // The onBlur event handler is called when focus has left the element (or left some element inside of it). 
            // For example, it’s called when the user clicks outside of a focused text input.
            onBlur={formik.handleBlur}
          />
        </InputGroup>

        {/* MUI TextField Design */}
        {/* <TextField 
          label="First Name" 
          id="firstName" 
          name="firstName" 
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          // Reference: https://reactjs.org/docs/events.html
          // The onBlur event handler is called when focus has left the element (or left some element inside of it). 
          // For example, it’s called when the user clicks outside of a focused text input.
          onBlur={formik.handleBlur}
          >
        </TextField> */}
        <div className="error">
          {formik.errors.firstName && formik.touched.firstName && formik.errors.firstName}
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
          <Form.Control
            placeholder="Last Name"
            aria-label="lastName"
            aria-describedby="basic-addon1"
            id="lastName" 
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputGroup>

        {/* MUI TextField Design */}
        {/* <TextField
          label="Last Name" 
          id="lastName" 
          name="lastName" 
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField> */}
        <div className="error">
          {formik.errors.lastName && formik.touched.lastName && formik.errors.lastName}
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
          <Form.Control
            placeholder="Company"
            aria-label="company"
            aria-describedby="basic-addon1"
            id="company" 
            name="company"
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputGroup>
        {/* <TextField 
          label="Company" 
          id="company" 
          name="company" 
          variant="outlined"
          value={formik.values.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField> */}
        <div className="error">
          {formik.errors.company && formik.touched.company && formik.errors.company}
        </div>
        
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
          <Form.Control
            placeholder="Designation"
            aria-label="designation"
            aria-describedby="basic-addon1"
            id="designation" 
            name="designation"
            value={formik.values.designation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputGroup>
        {/* <TextField 
          label="Designation" 
          id="designation" 
          name="designation" 
          variant="outlined"
          value={formik.values.designation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField> */}
        <div className="error">
          {formik.errors.designation && formik.touched.designation && formik.errors.designation}
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
          <Form.Control
            placeholder="Email"
            aria-label="email"
            aria-describedby="basic-addon1"
            id="email" 
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputGroup>
        
        {/* <TextField 
          label="Email" 
          id="email"
          name="email" 
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField> */}
        <div className="error">
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </div>

        {/* Upload Image */}
        <div class="mb-3">
          <label for="formFile" class="form-label">Upload your photo / company icon</label>
          <input class="form-control" type="file" id="formFile" />
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">#</InputGroup.Text>
          <Form.Control
            placeholder="Mobile"
            aria-label="mobile"
            aria-describedby="basic-addon1"
            id="mobile" 
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputGroup>

        {/* <TextField 
          label="Mobile" 
          id="mobile" 
          name="mobile" 
          variant="outlined"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
        </TextField> */}
        <div className="error">
          {formik.errors.mobile && formik.touched.mobile && formik.errors.mobile}
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">#</InputGroup.Text>
          <Form.Control
            placeholder="Telephone"
            aria-label="telephone"
            aria-describedby="basic-addon1"
            id="telephone" 
            name="telephone"
            value={formik.values.telephone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputGroup>
        {/* <TextField 
          label="Telephone" 
          id="telephone" 
          name="telephone" 
          variant="outlined"
          value={formik.values.telephone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >  
        </TextField> */}
        <div className="error">
          {formik.errors.telephone && formik.touched.telephone && formik.errors.telephone}
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">#</InputGroup.Text>
          <Form.Control
            placeholder="Location"
            aria-label="location"
            aria-describedby="basic-addon1"
            id="location" 
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputGroup>

        {/* <TextField 
          label="Location" 
          id="location" 
          name="location" 
          variant="outlined"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
            
        </TextField> */}
        <div className="error">
          {formik.errors.location && formik.touched.location && formik.errors.location}
        </div>

      <Button 
        variant="primary" 
        type="submit" 
        >
          Generate Card
      </Button>{' '}
        
        {/* MUI Button */}
        {/* <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        startIcon={<Polyline />}
        >
          Generate Card
        </Button> */}

      <Button 
        variant="success" 
        type="submit" 
        >
          Print / Save
      </Button>{' '}
        
      </Form>
    </div>
  )
}

export default FormContainer;