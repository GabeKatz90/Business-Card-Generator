import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SideBar from "./components/SideBar";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";
// import MapContainer from "./components/map/MapContainer.js";

function App() {
  return (
    <div>
      <Header />
      <Container fluid className="HomePage">
        <Row>

          <Col xs lg="2">
            <SideBar />
          </Col>

          <Col xs lg="10">
            <FormContainer />
          </Col>

          {/* <Col md lg="5">
            <GenerateCard />
            <MapContainer />
          </Col> */}

        </Row>
      </Container>
    </div>
  );
}

export default App;
