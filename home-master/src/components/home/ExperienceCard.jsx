import { Col, Card } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6" className="mb-4"> {/* <-- Keep the original grid column class */}
      <Card>
        <Card.Body className="text-center">
          <img className="bg-white mb-3" src={data.companylogo} alt="" />
          <h4 style={{ fontSize: '1.5rem' }}>{data.company}</h4> {/* <-- Company name with adjusted font size */}
          <p className="lead" style={{ fontSize: '1.2rem' }}>
            {data.role}
          </p>
          <p style={{ fontSize: '1rem' }}>{data.date}</p>
          <p>{data.description}</p> {/* <-- Description */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ExperienceCard;

