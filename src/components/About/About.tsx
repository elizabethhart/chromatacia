import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { googleMapsUrl } from "../../constants";
import { FaGithub, FaMailBulk } from 'react-icons/fa';
import './About.scss';

type AboutProps = { }

const About: React.FC<AboutProps> = ({

}: AboutProps) => {
  const [backgroundUrl, setBackgroundUrl] = useState<string>("");

  useEffect(() => {
    let requestUrl = googleMapsUrl + process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    axios.get(requestUrl)
      .then((res: any) => {
        setBackgroundUrl(res.config.url);
      })
      .catch((error: any) => {
        console.log('error', error);
      });
  }, []);

  const Card = styled.div`
    background-color: #202020;
    border-radius: 5px;
    padding: 10px;
    height: 300px;
    margin-top: 50px;
  `;

  const ProfileImage = styled.img`
    display: inline-block;
    width: 40%;
    border-radius: 50%;
    margin: 20px;
    vertical-align: top;
  `;

  const ProfileContent = styled.div`
    display: inline-block;
    width: 40%;
  `;

  return (
    <>
      <div className="about color-bar"></div>
      <Container 
        className="about-container" 
        style={{backgroundImage: `url(${backgroundUrl})`}}
      >
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Card>
              <ProfileImage
                alt="google-map" 
                src="https://elizabethhart.github.io/images/IMG_1321.JPG" 
              />
              <ProfileContent>
                <h1>Liz Hart</h1>
                <h6>Software Engineer | Artist</h6>
                <a
                  href="https://github.com/elizabethhart"
                  className="profile-link"
                >
                  <FaGithub /> {'github'}
                </a>
                <a
                  href="mailto:elizabethwhart@example.com"
                  className="profile-link"
                >
                  <FaMailBulk /> {'email'}
                </a>
              </ProfileContent>
            </Card>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
