import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import SideBar from './components/SideBar';
import Form from './components/Form';
import GenerateCard from './components/GeneratedCard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Row>
          <Col xs={3}><SideBar /></Col>
          <Col xs={5}><Form /></Col>
          <Col xs={4}><GenerateCard /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
