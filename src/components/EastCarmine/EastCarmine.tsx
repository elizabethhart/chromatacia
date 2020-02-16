import React from "react";
import { connect } from 'react-redux';
import { Carousel, Container } from 'react-bootstrap';
import { IAppState } from '../../store/Store';
import { ICharacter } from '../../reducers/characterReducer';

import './EastCarmine.scss';

interface IProps {
    characters: ICharacter[];
}

class EastCarmine extends React.Component<IProps> {
    public render() {
        const { characters } = this.props;
        
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
        )
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        characters: store.characterState.characters,
    };
};

export default connect(mapStateToProps)(EastCarmine);
