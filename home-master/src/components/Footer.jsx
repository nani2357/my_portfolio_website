import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/nani2357"
          aria-label="My GitHub"
        >
          <span className="badge bg-dark">
            Naveen
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
        <p>
          <small className="text-muted">
            Thank you to{" "}
            <a
              rel="noopener"
              href="https://github.com/hashirshoaeb"
              aria-label="Hashir Shoaeb's GitHub"
            >
              Hashir Shoaeb
            </a>{" "}
            for this open-source template.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

