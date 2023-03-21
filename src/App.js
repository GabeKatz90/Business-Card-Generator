import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SideBar from "./components/SideBar";
import FormContainer from "./components/FormContainer";
import GenerateCard from "./components/GeneratedCard";
import Header from "./components/Header";
import MapContainer from "./components/Map/MapContainer.js";

function App() {
  const [cardInfo, setCardInfo] = useState({});

  const handleSubmit = values => {
    setCardInfo(values);
  };

  return (
    <div>
      <Header />
      <Container fluid>
        <Row>

          <Col md lg="3">
            <SideBar />
          </Col>

          <Col md lg="4">
            <FormContainer onSubmit={handleSubmit} />
          </Col>

          <Col md lg="5">
            <GenerateCard firstName={cardInfo.firstName} />
            <MapContainer />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
