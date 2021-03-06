import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaGithub, FaMailBulk, FaMapPin } from "react-icons/fa";
import "./About.scss";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  const { t } = useTranslation();

  const Card = styled.div`
    background-color: #202020;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
  `;

  const ProfileImage = styled.img`
    display: block;
    width: 90%;
    border-radius: 50%;
    margin: 20px;
    vertical-align: top;
  `;

  const List = styled.ul`
    list-style-type: none;
  `;

  return (
    <>
      <div className="about color-bar"></div>
      <Container className="about-container">
        <Row>
          <Col md="3">
            <Card>
              <ProfileImage
                alt="google-map"
                src="https://elizabethhart.github.io/images/IMG_1321.JPG"
              />
              <h1>Liz Hart</h1>
              <h6>
                {t("Software Engineer")} | {t("artist")}
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
            </Card>
          </Col>
          <Col md="9">
            <h1>Technologies</h1>
            <List>
              <li>
                <h2>Javascript</h2>
                <p>
                  I'm currently using this domain to build and test React
                  components in an effort to better learn the capabilities of
                  the library and to apply various front-end frameworks.
                </p>
                <p>
                  Previously I have worked in a variety of javascript frameworks
                  and libraries including: Ember, Angular, Ionic, and jQuery.
                </p>
              </li>
            </List>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
