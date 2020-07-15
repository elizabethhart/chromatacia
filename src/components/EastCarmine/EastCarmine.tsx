import React from "react";
import { Carousel, Container } from 'react-bootstrap';

import './EastCarmine.scss';

type EastCarmineProps = {
    characters: any[]
}

const EastCarmine: React.FC<EastCarmineProps> = ({
    characters
}: EastCarmineProps) => {
    return (
        <>
            <div className="eastcarmine color-bar"></div>

            <Container className="carousel-container">
                <Carousel className="carousel">
                    {characters &&
                    characters.map(character => {
                        return (
                            <Carousel.Item className="carousel-item">
                                <img src={character.image} alt="color" className="carousel-img" />
                                <Carousel.Caption>
                                    <h3 key={character.name} className="name">
                                        {character.name}
                                    </h3>
                                    <p key={character.color} className="color">
                                        {character.color}
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </Container>
        </>
    );
}

export default EastCarmine;
