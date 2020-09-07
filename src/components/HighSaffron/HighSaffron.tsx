import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./HighSaffron.scss";

type HighSaffronProps = {};

const HighSaffron: React.FC<HighSaffronProps> = () => {
  return (
    <>
      <div className="highsaffron color-bar"></div>
      <Container>
        <Row>
          <Col>
            <Image
              src="https://images.unsplash.com/photo-1588867771352-f27a48b2b749?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3568&q=80"
              alt="spoons"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HighSaffron;
