import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../store/Store';

import { ICharacter } from '../reducers/characterReducer';

interface IProps {
    characters: ICharacter[];
}

class CharacterList extends React.Component<IProps> {
    public render() {
        const { characters } = this.props;
        return (
            <div className="name-container">
                {characters &&
                characters.map(character => {
                    return (
                        <>
                            <p key={character.name} className="name">
                                Name: {character.name}
                            </p>
                            <p key={character.color} className="color">
                                Color: {character.color}
                            </p>
                        </>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        characters: store.characterState.characters,
    };
};

export default connect(mapStateToProps)(CharacterList);