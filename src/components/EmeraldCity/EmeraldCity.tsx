import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';
import './EmeraldCity.scss';
require('dotenv').config();

type EmeraldCityProps = { }

const EmeraldCity: React.FC<EmeraldCityProps> = ({

}: EmeraldCityProps) => {
    const [image, setImage] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        // axios.get(`https://api.nasa.gov/planetary/apod?api_key=` + process.env.REACT_APP_NASA_KEY)
        //     .then((res: any) => {
        //         const item = res.data;
        //         setImage(item.url);
        //         setDescription(item.explanation);
        //         setTitle(item.title);
        //     });
    }, []);

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
