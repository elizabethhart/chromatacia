import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

import './About.scss';

type AboutProps = { }

const About: React.FC<AboutProps> = ({

}: AboutProps) => {
    const [backgroundUrl, setBackgroundUrl] = useState<string>("");

    useEffect(() => {
        let requestUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=Chicago,IL'
        requestUrl += '&zoom=10&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d'
        requestUrl += '&style=element:labels%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x8ec3b9'
        requestUrl += '&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative%7Celement:geometry%7Cvisibility:off'
        requestUrl += '&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Cvisibility:off'
        requestUrl += '&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.neighborhood%7Cvisibility:off'
        requestUrl += '&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0x334e87'
        requestUrl += '&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a'
        requestUrl += '&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d'
        requestUrl += '&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x3C7680'
        requestUrl += '&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.icon%7Cvisibility:off'
        requestUrl += '&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d'
        requestUrl += '&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763'
        requestUrl += '&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58'
        requestUrl += '&style=feature:transit%7Cvisibility:off&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be'
        requestUrl += '&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a'
        requestUrl += '&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626'
        requestUrl += '&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&size=480x360'
        requestUrl += '&key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY

        axios.get(requestUrl)
            .then((res: any) => {
                setBackgroundUrl(res.config.url);
            });
    }, []);

    return (
        <>
            <div className="about color-bar"></div>
            <Container className="about-container" style={{backgroundImage: `url(${backgroundUrl})`}}>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <div className="card-theme">
                            <img className="profile-img" alt="google-map" src="https://elizabethhart.github.io/images/IMG_1321.JPG" />
                            <div className="profile-content">
                                <h1>Liz Hart</h1>
                                <div>
                                    <p>Software Engineer</p>
                                    <p>Chicago, IL</p>
                                    <p><a href="https://github.com/elizabethhart">github&nbsp;<i className="fa fa-github"></i></a></p>
                                    <p><a href="mailto:elizabethwhart@example.com">email&nbsp;<i className="fa fa-envelope"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </Container>
        </>
    );
};

export default About;