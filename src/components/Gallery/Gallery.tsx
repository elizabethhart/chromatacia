import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Card, Container, Modal } from "react-bootstrap";

import "./Gallery.scss";

type GalleryProps = {};

const Gallery: React.FC<GalleryProps> = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState<any>([]);
  const [show, setShow] = useState<boolean>(false);
  const [selectedUrl, setSelectedUrl] = useState<string>("");

  useEffect(() => {
    getGalleryImages();
  }, []);

  function getGalleryImages() {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id=72157715844102541&extras=url_o&format=json&nojsoncallback=1&api_key=${process.env.REACT_APP_FLICKR_API_KEY}`
      )
      .then((response) => {
        if (
          response.data.hasOwnProperty("photoset") &&
          response.data.photoset.hasOwnProperty("photo")
        ) {
          setItems(response.data.photoset.photo);
        } else {
          console.log("response", response);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function handleCardClick(url: string) {
    setSelectedUrl(url);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <>
      <div className="eastcarmine color-bar"></div>

      <Container className="carousel-container">
        <h3>{t("Drawings, Paintings, Digital Media")}</h3>
        {items.map((item: any, index: number) => {
          return (
            <Card
              style={{ width: "18rem" }}
              key={index}
              onClick={() => handleCardClick(item.url_o)}
            >
              <Card.Img variant="top" src={item.url_o} />
            </Card>
          );
        })}
      </Container>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Body>
          <img className="modal-image" src={selectedUrl} alt="drawing" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gallery;
