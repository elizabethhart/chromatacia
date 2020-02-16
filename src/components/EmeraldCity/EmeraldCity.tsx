import React from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';
import './EmeraldCity.scss';
import axios from 'axios';
require('dotenv').config();

type HomeProps = {
    
}

type HomeState = {
    image: string,
    description: string,
    title: string
}

export default class EmeraldCity extends React.Component<HomeProps, HomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            image: '',
            description: '',
            title: ''
        };
    }

    componentDidMount() {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=` + process.env.REACT_APP_NASA_KEY)
            .then((res: any) => {
                const item = res.data;
                this.setState({
                    image: item.url,
                    description: item.explanation,
                    title: item.title
                });
            });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return <>
            <div className="emeraldcity color-bar"></div>
            <Container className="home-container">
                <Row>
                    <Col>
                        <h2>External APIs</h2>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={this.state.image} />
                            <Card.Body>
                                <Card.Title>{this.state.title}</Card.Title>
                                <Card.Text>{this.state.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    }
}
