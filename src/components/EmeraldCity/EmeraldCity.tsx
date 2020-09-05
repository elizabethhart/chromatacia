import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './EmeraldCity.scss';

type EmeraldCityProps = { }

const EmeraldCity: React.FC<EmeraldCityProps> = ({

}: EmeraldCityProps) => {
  const [books, setBooks] = useState<any>([]);
  const parseString = require('xml2js').parseString;

  useEffect(() => {
      getBooks();
  }, []);

  function getBooks() {
    const forLocalDev = 'https://cors-anywhere.herokuapp.com/';
    axios.get(`${forLocalDev}https://www.goodreads.com/review/list/89704524.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}&v=2&shelf=currently-reading`)
      .then((response) => {
        console.log('response', response);
        parseString(response.data, (err: any, result: any) => {
          if (err) {
           console.log(err);
          } else {
           console.log('parsing result', result.GoodreadsResponse.reviews[0].review);
           setBooks(result.GoodreadsResponse.reviews[0].review);
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
            {books.map((book: any, index: number) => {
              let bookObject = book.book[0];
              return <Card key={index}>
                <Card.Img variant="top" src={bookObject.image_url} />
                <Card.Body>
                  <Card.Title>{bookObject.title}</Card.Title>
                  <Card.Text>{bookObject.authors[0].author[0].name}</Card.Text>
                </Card.Body>
              </Card>
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EmeraldCity;
