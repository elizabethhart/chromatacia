import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Container, Row, Spinner } from "react-bootstrap";
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
  const baseUrl = `${process.env.REACT_APP_CORS_ANYWHERE_URL}https://www.goodreads.com/review/list/89704524.xml`;

  useEffect(() => {
    async function getShelves() {
      setIsLoading(true);
      await Promise.all([
        getCurrentBooks(),
        getPastBooks(),
        getFavoriteBooks(),
      ]);
      setIsLoading(false);
    }

    getShelves();
  }, []);

  const getCurrentBooks = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          key: process.env.REACT_APP_GOODREADS_API_KEY,
          v: 2,
          shelf: "currently-reading",
          sort: "date_pub",
        },
      });
      parseString(response.data, (err: any, result: any) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentBooks(result.GoodreadsResponse.reviews[0].review);
        }
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPastBooks = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          key: process.env.REACT_APP_GOODREADS_API_KEY,
          v: 2,
          shelf: "read",
          sort: "date_pub",
          per_page: 10,
        },
      });

      parseString(response.data, (err: any, result: any) => {
        if (err) {
          console.log(err);
        } else {
          setPastBooks(result.GoodreadsResponse.reviews[0].review);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getFavoriteBooks = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          key: process.env.REACT_APP_GOODREADS_API_KEY,
          v: 2,
          shelf: "favorites",
          sort: "date_pub",
        },
      });

      parseString(response.data, (err: any, result: any) => {
        if (err) {
          console.log(err);
        } else {
          setFavoriteBooks(result.GoodreadsResponse.reviews[0].review);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="emeraldcity color-bar"></div>
      <Container className="home-container">
        {isLoading ? (
          <Spinner animation="border" variant="light" className="m-5" />
        ) : (
          <>
            <Row className="title-row">
              <ItemCarousel
                items={currentBooks}
                itemHeadline={t`what-im-reading-this-week`}
              />
              <ItemCarousel items={favoriteBooks} itemHeadline={t`favorites`} />
            </Row>
            <Row className="bottom-row">
              <ItemCarousel items={pastBooks} itemHeadline={t`recent-reads`} />
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default Bookshelf;
