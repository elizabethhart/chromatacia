import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaMailBulk, FaMapPin } from "react-icons/fa";
import "./About.scss";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="about color-bar"></div>
      <Container className="about-container">
        <Row>
          <Col md="3">
            <div className="card">
              <h1>Liz Hart</h1>
              <h6>
                {t`software-engineer`} | {t`artist`}
              </h6>
              <h6>
                <FaMapPin /> Chicago
              </h6>
              <a
                href="https://github.com/elizabethhart"
                className="profile-link"
              >
                <FaGithub /> {"github"}
              </a>
              <a
                href="mailto:elizabethwhart@gmail.com"
                className="profile-link"
              >
                <FaMailBulk /> {"email"}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
