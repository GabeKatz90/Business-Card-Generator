import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import FormContainer from "./FormContainer";

function HomePage() {
    return (
        <Container fluid className="HomePage">
        <Row>

          <Col md="0" lg="3">
            <SideBar/>
          </Col>

          <Col md="12" lg="9">
            <FormContainer />
          </Col>

        </Row>
      </Container>

    )
}

export default HomePage;