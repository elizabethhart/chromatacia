import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import "./Bookshelf.scss";

type BookshelfProps = {};

const Bookshelf: React.FC<BookshelfProps> = () => {
  const { t } = useTranslation();
  const [currentBooks, setCurrentBooks] = useState<any>([]);
  const [pastBooks, setPastBooks] = useState<any>([]);
  const [favoriteBooks, setFavoriteBooks] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const parseString = require("xml2js").parseString;

  useEffect(() => {
    getCurrentBooks();
    getPastBooks();
    getFavoriteBooks();
  }, []);

  function getCurrentBooks() {
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_CORS_ANYWHERE_URL}https://www.goodreads.com/review/list/89704524.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}&v=2&shelf=currently-reading&sort=date_pub`
      )
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
    axios
      .get(
        `${process.env.REACT_APP_CORS_ANYWHERE_URL}https://www.goodreads.com/review/list/89704524.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}&v=2&shelf=read&sort=date_pub&per_page=10`
      )
      .then((response) => {
        parseString(response.data, (err: any, result: any) => {
          if (err) {
            console.log(err);
          } else {
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

  function getFavoriteBooks() {
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_CORS_ANYWHERE_URL}https://www.goodreads.com/review/list/89704524.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}&v=2&shelf=favorites&sort=date_pub`
      )
      .then((response) => {
        parseString(response.data, (err: any, result: any) => {
          if (err) {
            console.log(err);
          } else {
            setFavoriteBooks(result.GoodreadsResponse.reviews[0].review);
          }
          setIsLoading(false);
        });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <>
      <div className="emeraldcity color-bar"></div>
      <Container className="home-container">
        <Row className="title-row">
          <ItemCarousel
            items={currentBooks}
            itemHeadline={t("What I'm reading this week")}
            isLoading={isLoading}
          />
          <ItemCarousel
            items={favoriteBooks}
            itemHeadline={t("Favorites")}
            isLoading={isLoading}
          />
        </Row>
        <Row className="bottom-row">
          <ItemCarousel
            items={pastBooks}
            itemHeadline={t("Recent Reads")}
            isLoading={isLoading}
          />
        </Row>
      </Container>
    </>
  );
};

export default Bookshelf;
