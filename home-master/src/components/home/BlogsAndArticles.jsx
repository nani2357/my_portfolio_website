import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BlogsAndArticles = ({ blogs }) => {
  return (
    <section className="section blogs-section" style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <h2 className="display-4 mb-5 text-center">
          {blogs.heading}
        </h2>
        <Row className="justify-content-center">
          {
            blogs.data.map((blog, index) => (
              <BlogCard key={index} data={blog} />
            ))
          }
        </Row>
      </Container>
    </section>
  );
}

const BlogCard = ({ data }) => {
  return (
    <Col lg="4" md="6" sm="8" className="mb-4 d-flex justify-content-center">
      <Card className="h-100" style={{ width: '22rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href={data.link} target="_blank">Read Article</Card.Link>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default BlogsAndArticles;
