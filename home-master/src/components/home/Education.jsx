import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const Education = ({ education }) => {
  return (
    <section className="section">
      <Container>
        <h2 className="display-4 mb-5 text-center">
          {education.heading}
        </h2>
        <Row>
          {
            education.data.map((data, index) => {
              return <EducationCard key={index} data={data} />
            })
          }
        </Row>
      </Container>
    </section>
  );
}

const EducationCard = ({ data }) => {
  return (
    <Col lg="6" className="mb-4">
      <Card className="h-100 shadow"> {/* <-- Added shadow for a different look */}
        <Card.Body className="text-center">
          <h4 className="mb-3" style={{ fontSize: '1.6rem', color: '#007BFF' }}>{data.institution}</h4> {/* <-- Institution name with a blue color */}
          <h5 className="mb-3" style={{ fontSize: '1.4rem' }}>{data.course}</h5>
          <p style={{ fontSize: '1.1rem' }}>{data.duration}</p>
          <p>{data.description}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Education;
