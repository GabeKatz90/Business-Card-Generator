import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from "react-bootstrap";

function Contact () {
  return (
    <>
      <Container>
        <Row>
          <Col>
          <Card style={{ width: '20rem' }}>
          <Card.Title>Kejvin Pashaj</Card.Title>

      <Card.Body>
        
        <Card.Text>
          Junior Developer
          London, England
        </Card.Text>
        
     
        
      
      </Card.Body>
      <Button onClick={() => window.open("https://www.linkedin.com/in/kevpash/", '_blank')}>LinkenIn</Button>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '20rem' }}>
          <Card.Title>Robert Patrick Sazon</Card.Title>

      <Card.Body>

        
        <Card.Text>
          Junior Developer
          
          Bath,England
        </Card.Text>
  
        
      </Card.Body>
      <Button onClick={() => window.open("https://www.linkedin.com/in/rjpsazon/", '_blank')}>LinkenIn</Button>
    </Card>
          </Col>

          <Col>
          <Card style={{ width: '20rem' }}>
          <Card.Title>Gabriels Katz</Card.Title>

      <Card.Body>
        
        <Card.Text>
         Junior Developer

         London,England
        </Card.Text>
        
      </Card.Body>
      <Button onClick={() => window.open("https://www.linkedin.com/in/gabkatz90/", '_blank')}>LinkenIn</Button>
    </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default Contact;