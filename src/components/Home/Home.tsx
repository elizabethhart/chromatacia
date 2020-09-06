import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import "./Home.scss";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const history = useHistory();

  return (
    <>
      <div className="roygbv color-bar"></div>
      <Container>
        <div className="typewriter">
          <h1>Hello</h1>
          <p>I'm Liz, a software engineer</p>
          <Row className="justify-content-md-center">
            <Button variant="light" onClick={() => history.push("/about")}>
              Contact
            </Button>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
