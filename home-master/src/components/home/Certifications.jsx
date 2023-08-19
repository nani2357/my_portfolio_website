import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Certifications = ({ certifications }) => {
  return (
    <section className="section certifications-section">
      <Container>
        <h2 className="display-4 mb-5 text-center">
          {certifications.heading}
        </h2>
        <Row>
          {
            certifications.data.map((cert, index) => (
              <CertificationCard key={index} data={cert} />
            ))
          }
        </Row>
      </Container>
    </section>
  );
}

const CertificationCard = ({ data }) => {
  return (
    <Col lg="3" md="4" sm="6" className="mb-4">
      <Card className="h-100"> {/* <-- Added h-100 to ensure equal height */}
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.course}</Card.Title>
          <Card.Text>- {data.tutor}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Certifications;




