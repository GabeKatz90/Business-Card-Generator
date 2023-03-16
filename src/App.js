import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import SideBar from './components/SideBar';
import FormContainer from './components/FormContainer';
import GenerateCard from './components/GeneratedCard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Container >
        <Header fluid/>
        <Row>

          <Col >
            <SideBar />
          </Col>

          <Col >
            <FormContainer />
          </Col>

          <Col >
            <GenerateCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
