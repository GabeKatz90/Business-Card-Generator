import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SideBar from "./components/SideBar";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Container fluid className="HomePage">
        <Row>

          <Col md="0" lg="2">
            <SideBar />
          </Col>

          <Col md="12" lg="10">
            <FormContainer />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
