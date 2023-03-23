// import Grid from '@mui/material/Grid'; // Grid version 1
// // import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

// function About (){
  
// <Grid container spacing={2} minHeight={160}>
//   <Grid xs display="flex" justifyContent="center" alignItems="center">
//     {/* <Avatar src="/static/images/avatar/1.jpg" /> */}
//   </Grid>
//   <Grid display="flex" justifyContent="center" alignItems="center">
//     {/* <Avatar src="/static/images/avatar/2.jpg" /> */}
//   </Grid>
//   <Grid xs display="flex" justifyContent="center" alignItems="center">
//     {/* <Avatar src="/static/images/avatar/3.jpg" /> */}
//   </Grid>
// </Grid>
// }
// export default About;

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from "react-bootstrap";

function Contact () {
  return (
    <>
      <Container>
        <Row>
          <Col>
          <Card style={{ height: '20rem' }}>
          <Card.Title>Generate Business Card Company Limited</Card.Title>
          <Card.Text>
          
          Start Up Company Based In England
         
        </Card.Text>
        
      <Card.Body>
      
        <Card.Text>

        
          90 The Crescent ,London W24 8CS
          England
          
        </Card.Text>
        
        
     
        
      
      </Card.Body>
      <img src="https://www.google.com/maps/vt/data=KZzZvi4gOKoZ44FLEd_UR_fAs3Niqyp8YefF_AMLtJ2QAwcsk8kZHabDSAvIwV6qUX2PaKCb7QZIIgzyt4VpU6j6MC6DODFKdxqfLITq0AkmZOKqEYXBjt_LNcdCOhfita7X5SpT33kIGF9VnMNMyoAsal9Qq47L5nM7xa837gFaandvzUPYLY6NB4Ar8yA56SRIpUgBy_fGyGYndSenal7L7JwfqMzBj8fdU5_J8lF5uB1tDbqoBxaVk198zHIGBREw4DStoQ" alt="Google pos" />
      <Button onClick={() => window.open("", '_blank')}>Email US!</Button>
    </Card>
          </Col>
  
        </Row>
      </Container>
    </>
  );
}

export default Contact;