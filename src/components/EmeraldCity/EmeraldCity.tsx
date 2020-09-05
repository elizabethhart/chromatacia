import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './EmeraldCity.scss';

type EmeraldCityProps = { }

const EmeraldCity: React.FC<EmeraldCityProps> = ({

}: EmeraldCityProps) => {
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const parseString = require('xml2js').parseString;

  useEffect(() => {
      getBooks();
  }, []);

  function getBooks() {
    axios.get(`https://www.goodreads.com/review/list/89704524.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}&v=2&shelf=read`)
      .then((response) => {
        console.log('response', response);
        parseString(response.data, (err: any, result: any) => {
          if (err) {
           console.log(err);
          } else {
           console.log('parsing result', result);
         }
        }); 
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="emeraldcity color-bar"></div>
      <Container className="home-container">
        <Row>
          <Col>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EmeraldCity;
