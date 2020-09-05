import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
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
    axios.get(`${process.env.REACT_APP_CORS_ANYWHERE_URL}https://www.goodreads.com/review/list/89704524.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}&v=2&shelf=currently-reading`)
      .then((response) => {
        parseString(response.data, (err: any, result: any) => {
          if (err) {
           console.log(err);
          } else {
            if (
              result.hasOwnProperty('GoodreadsReponse') &&
              result.GoodreadsResponse.hasOwnProperty('reviews') &&
              result.GoodreadsResponse.reviews.length > 0 &&
              result.GoodreadsResponse.reviews[0].hasOwnProperty('review')
            ) {
              setBooks(result.GoodreadsResponse.reviews[0].review);
            }
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
          {books.length > 0
            ? <Col>
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
            : <Col>
              <Spinner animation="border" variant="light" className="m-5"/>
            </Col>
          }
        </Row>
      </Container>
    </>
  );
}

export default EmeraldCity;
