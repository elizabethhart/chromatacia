import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Container, Row } from "react-bootstrap";
import "./Home.scss";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <div className="roygbv color-bar"></div>
      <Container>
        <div className="typewriter">
          <h1>{t`hello`}</h1>
          <p>{t("intro", { name: "Liz" })}</p>
          <Row className="justify-content-md-center">
            <Button variant="light" onClick={() => history.push("/about")}>
              {t`contact`}
            </Button>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
