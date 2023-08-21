import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StaticProjects = ({ projects }) => {
  const [showAll, setShowAll] = useState(false); // State to control the number of projects displayed

  const displayedProjects = showAll ? projects.cards : projects.cards.slice(0, 6);

  return (
    <section className="section bg-black">
      <Container fluid className="p-4">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="display-4 mb-5 text-center text-white">
            {projects.title}
          </h2>
          <Row className="justify-content-center" style={{ display: 'flex', flexDirection: 'row' }}>
            {displayedProjects.map((project, idx) => (
              <Col key={idx} xs={12} md={6} lg={4} className="d-flex align-items-stretch">
                <Card className="mb-4 py-3 px-3 flex-grow-1">
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
          {!showAll && projects.cards.length > 6 && ( // Display the "More" button only if there are more than 6 projects and not all are displayed
            <div className="text-center mt-4">
              <Button variant="primary" onClick={() => setShowAll(true)}>
                More
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default StaticProjects;
