import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Carousel, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import './EmeraldCity.scss';

type EmeraldCityProps = { }

const EmeraldCity: React.FC<EmeraldCityProps> = ({

}: EmeraldCityProps) => {
  const [currentBooks, setCurrentBooks] = useState<any>([]);
  const [pastBooks, setPastBooks] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const parseString = require('xml2js').parseString;

  useEffect(() => {
    getCurrentBooks();
    getPastBooks();
  }, []);

  function getCurrentBooks() {
    setIsLoading(true);
    axios.get(`${process.env.REACT_APP_CORS_ANYWHERE_URL}https://www.goodreads.com/review/list/89704524.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}&v=2&shelf=currently-reading&sort=date_pub`)
      .then((response) => {
        parseString(response.data, (err: any, result: any) => {
          if (err) {
           console.log(err);
          } else {
            setCurrentBooks(result.GoodreadsResponse.reviews[0].review);
         }
         setIsLoading(false);
        }); 
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  function getPastBooks() {
    setIsLoading(true);
    axios.get(`${process.env.REACT_APP_CORS_ANYWHERE_URL}https://www.goodreads.com/review/list/89704524.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}&v=2&shelf=read&sort=date_pub`)
      .then((response) => {
        parseString(response.data, (err: any, result: any) => {
          if (err) {
           console.log(err);
          } else {
            console.log(result.GoodreadsResponse.reviews[0].review);
            setPastBooks(result.GoodreadsResponse.reviews[0].review);
         }
         setIsLoading(false);
        }); 
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  function getAccordian(bookList: [any]) {
    return <Col>
      <Carousel>
        {bookList.map((book: any, index: number) => {
          let bookObject = book.book[0];
          return <Carousel.Item>
            <img
              className="carousel-image"
              src={bookObject.image_url}
              alt="slide"
            />
            <Carousel.Caption>
              <a 
                href={bookObject.link}
                className="carousel-title"
              >
                {bookObject.title}
              </a>
              <p>{bookObject.authors[0].author[0].name}</p>
            </Carousel.Caption>
          </Carousel.Item>;
        })}
      </Carousel>
    </Col>;
  }

  return (
    <>
      <div className="emeraldcity color-bar"></div>
      <Container className="home-container">
          <Row className="title-row">
            <h1>What I'm reading this week</h1>
          </Row>
          <Row className="title-row">
            {!isLoading
              ? getAccordian(currentBooks)
              : <Col>
                <Spinner 
                  animation="border" 
                  variant="light" 
                  className="m-5"
                />
              </Col>
            }
          </Row>
          <Row className="title-row">
            <h1>What I've read recently</h1>
          </Row>
          <Row className="title-row">
            {!isLoading
              ? getAccordian(pastBooks)
              : <Col>
                <Spinner 
                  animation="border" 
                  variant="light" 
                  className="m-5"
                />
              </Col>
            }
          </Row>
      </Container>
    </>
  );
}

export default EmeraldCity;
