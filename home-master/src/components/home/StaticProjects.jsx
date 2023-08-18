import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const StaticProjects = ({ projects }) => {
  return (
    <section className="section">
      <Container className="bg-white p-4 rounded">
        <h2 className="display-4 mb-5 text-center">
          {projects.title}
        </h2>
        <Row>
          {projects.cards.map((project, idx) => (
            <Col key={idx} md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {project.icons.map((icon, iconIdx) => (
                    <Button key={iconIdx} variant="outline-primary" href={icon.link} className="mr-2">
                      <i className={`fab ${icon.icon}`} /> View
                    </Button>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default StaticProjects;


