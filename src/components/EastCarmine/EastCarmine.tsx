import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';

import './EastCarmine.scss';

type EastCarmineProps = { }

const EastCarmine: React.FC<EastCarmineProps> = ({

}: EastCarmineProps) => {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    getGalleryImages();
  }, []);

  function getGalleryImages() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&photoset_id=72157715844102541&extras=url_o&format=json&nojsoncallback=1&auth_token=${process.env.REACT_APP_FLICKR_AUTH_TOKEN}&api_sig=${process.env.REACT_APP_FLICKR_API_SIG}`)
      .then((response) => {
        setItems(response.data.photoset.photo);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  return (
    <>
      <div className="eastcarmine color-bar"></div>

      <Container className="carousel-container">
        {items.map((item: any, index: number) => {
            return <Card style={{ width: '18rem' }} key={index}>
                <Card.Img 
                  variant="top" 
                  src={item.url_o}
                />
            </Card>
        })}
      </Container>
    </>
  );
}

export default EastCarmine;
