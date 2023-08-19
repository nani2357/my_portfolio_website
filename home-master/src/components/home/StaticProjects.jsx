import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StaticProjects = ({ projects }) => {
    return (
      <section className="section bg-black"> {/* <-- Moved the background color here */}
        <Container fluid className="p-4">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* <-- This div will center the content and limit its width */}
            <h2 className="display-4 mb-5 text-center text-white">
              {projects.title}
            </h2>
            <Row className="justify-content-center">
              {projects.cards.map((project, idx) => (
                <Col key={idx} xs={12} md={6} lg={4}>
                  <Card className="mb-4 py-3 px-3" style={{ width: "100%" }}>
                    <Card.Body>
                      <Card.Title className="text-primary">{project.title}</Card.Title>
                      <Card.Text className="text-dark">{project.description}</Card.Text>
                      <div className="text-end">
                        {project.icons.map((icon, iconIdx) => (
                          <Button key={iconIdx} variant="link" href={icon.link} className="mx-1">
                            <FontAwesomeIcon icon={icon.icon} size="2x" />
                          </Button>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    );
}

export default StaticProjects;