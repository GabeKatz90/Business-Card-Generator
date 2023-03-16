import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SideBar from "./components/SideBar";
import FormContainer from "./components/FormContainer";
import GenerateCard from "./components/GeneratedCard";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>

          <Col md lg="3">
            <SideBar />
          </Col>

          <Col md lg="4">
            <FormContainer />
          </Col>

          <Col md lg="5">
            <GenerateCard />
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
