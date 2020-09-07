import React from "react";
import { Col, Carousel, Spinner } from "react-bootstrap";
import "./ItemCarousel.scss";

type ItemCarouselProps = {
  items: any[];
  itemHeadline: string;
  isLoading: boolean;
};

const ItemCarousel: React.FC<ItemCarouselProps> = ({
  items,
  itemHeadline,
  isLoading,
}) => {
  return (
    <Col>
      <h3>{itemHeadline}</h3>
      {!isLoading ? (
        <Carousel>
          {items.map((item: any, index: number) => {
            let itemObject = item.book[0];
            return (
              <Carousel.Item
                key={index}
                onClick={() => {
                  window.open(itemObject.link);
                }}
              >
                <img
                  className="carousel-image"
                  src={itemObject.image_url}
                  alt="slide"
                />
                <Carousel.Caption>
                  <h3 className="carousel-title">{itemObject.title}</h3>
                  <p>{itemObject.authors[0].author[0].name}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <Spinner animation="border" variant="light" className="m-5" />
      )}
    </Col>
  );
};

export default ItemCarousel;
