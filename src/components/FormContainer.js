import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

// MUI Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import BadgeIcon from '@mui/icons-material/Badge';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

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
    onSubmit: (values, actions) => {
      actions.onSubmit(values);
      actions.setSubmitting(false);

      console.log("onSubmit", values);
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid Email address'),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required")
    })
  })

  return (
    <div>
      <p>Business Card Generator</p>

        <Form onSubmit={formik.handleSubmit}>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2"><AccountCircleIcon /></InputGroup.Text>
            <Form.Control
              placeholder="First Name"
              aria-label="firstName"
              aria-describedby="basic-addon1"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.firstName && formik.touched.firstName && formik.errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName && formik.touched.firstName && formik.errors.firstName}
            </Form.Control.Feedback>
          </InputGroup>
    
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2"><AccountCircleIcon /></InputGroup.Text>
            <Form.Control
              placeholder="Last Name"
              aria-label="lastName"
              aria-describedby="basic-addon1"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.lastName && formik.touched.lastName && formik.errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName && formik.touched.lastName && formik.errors.lastName}
            </Form.Control.Feedback>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2"><BusinessIcon /></InputGroup.Text>
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
          <div className="error">
            {formik.errors.company && formik.touched.company && formik.errors.company}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2"><BadgeIcon /></InputGroup.Text>
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
          <div className="error">
            {formik.errors.designation && formik.touched.designation && formik.errors.designation}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2"><AlternateEmailIcon /></InputGroup.Text>
            <Form.Control
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.email && formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email && formik.touched.email && formik.errors.email}
            </Form.Control.Feedback>
          </InputGroup>

          {/* Upload Image */}
          <div class="mb-3">
            <label for="formFile" class="form-label">Upload your photo / company icon</label>
            <input class="form-control" type="file" id="formFile" />
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2"><MobileScreenShareIcon /></InputGroup.Text>
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
          <div className="error">
            {formik.errors.mobile && formik.touched.mobile && formik.errors.mobile}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2"><AddIcCallIcon /></InputGroup.Text>
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
          <div className="error">
            {formik.errors.telephone && formik.touched.telephone && formik.errors.telephone}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2"><AddLocationAltIcon /></InputGroup.Text>
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
          <div className="error">
            {formik.errors.location && formik.touched.location && formik.errors.location}
          </div>

          <Button
            variant="primary"
            type="submit"
          >
            Generate Card
          </Button>{' '}

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