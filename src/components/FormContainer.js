import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import "./css/style.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MapModal from './map/ModalMap';

// MUI Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import BadgeIcon from "@mui/icons-material/Badge";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

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
      location: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid Email address"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
    }),
  });

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md lg="6" className="Form_Div">
            <p>Business Card Generator</p>
            <Form onSubmit={formik.handleSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                  {/* MUI Icons */}
                  <AccountCircleIcon />
                </InputGroup.Text>
                <Form.Control
                  placeholder="First Name"
                  aria-label="firstName"
                  aria-describedby="basic-addon1"
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.errors.firstName &&
                    formik.touched.firstName &&
                    formik.errors.firstName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName &&
                    formik.touched.firstName &&
                    formik.errors.firstName}
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                  <AccountCircleIcon />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Last Name"
                  aria-label="lastName"
                  aria-describedby="basic-addon1"
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.errors.lastName &&
                    formik.touched.lastName &&
                    formik.errors.lastName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.lastName &&
                    formik.touched.lastName &&
                    formik.errors.lastName}
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                  <BusinessIcon />
                </InputGroup.Text>
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
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                  <BadgeIcon />
                </InputGroup.Text>
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
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                  <AlternateEmailIcon />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.errors.email &&
                    formik.touched.email &&
                    formik.errors.email
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email &&
                    formik.touched.email &&
                    formik.errors.email}
                </Form.Control.Feedback>
              </InputGroup>
              {/* Upload Image */}
              <div className="mb-3">
                <p className="form-label">Upload your photo / company icon</p>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                  <MobileScreenShareIcon />
                </InputGroup.Text>
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
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                  <AddIcCallIcon />
                </InputGroup.Text>
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
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                  <AddLocationAltIcon />
                </InputGroup.Text>
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
              <Button variant="primary" type="submit">
                Generate Card
              </Button>{" "}
              <Button variant="success" type="submit">
                Print / Save
              </Button>{" "}
              
            </Form>
          </Col>

          <Col md lg="6" >
            <Container fluid>
            <p>This is for Generating Card</p>
              <Row className="GeneCard">
              <Card className="FrontCard">
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>
                  <FormFirstName 
                      text={formik.values.firstName}
                    />
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              
              <Card className="BackCard">
                
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">
                    <MapModal />
                  </Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>          

              </Row>
              {/* <Row>

                <Col>
                  <MapContainer />
                </Col>

                <Col>
                  <Button className="pindot">
                    <HelloCounter 
                      text={formik.values.firstName}
                    />
                  </Button>
                </Col>

              </Row> */}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const FormFirstName = (props) => {
  return <p>{props.text}</p>;
};

export default FormContainer;
