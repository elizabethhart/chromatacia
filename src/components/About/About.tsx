import React from "react";
import { Button, Icon } from "evergreen-ui";
import { Card, Col, Container, Row } from 'react-bootstrap';
import './About.scss';

export default class About extends React.Component {
    render() {
        return <>
            <div className="about color-bar"></div>
            <Container className="about-container">
                <Row>
                    <Col md="3"></Col>
                    <Col md="3">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="https://www.refinery29.com/images/8946936.jpg?format=webp&width=720&height=864&quality=85" />
                            <Card.Body>
                                <Card.Title>Elizabeth Hart</Card.Title>
                                <Card.Text>
                                    <p>Software Engineer</p>
                                    <p>Chicago, IL</p>
                                    <Button
                                        is="a"
                                        href="mailto:elizabethwhart@example.com"
                                        appearance="minimal"
                                    >
                                        Email &nbsp; <Icon icon="envelope" color="info" />
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card className="card-test">
                            <Card.Title>
                                New Card
                            </Card.Title>
                        </Card>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </Container>
        </>
    }
}
