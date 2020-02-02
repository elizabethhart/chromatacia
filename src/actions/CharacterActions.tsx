import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ICharacter, ICharacterState } from '../reducers/characterReducer'

export enum CharacterActionTypes {
    GET_ALL = 'GET_ALL',
}

export interface ICharacterGetAllAction {
    type: CharacterActionTypes.GET_ALL
    characters: ICharacter[]
}

export type CharacterActions = ICharacterGetAllAction;

export const getAllCharacters: ActionCreator<ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>> = () => {
    const characters = [
        {
            name: 'Eddie Russett',
            color: 'Red'
        },
        {
            name: 'Jane G23',
            color: 'Grey'
        },
        {
            name: 'Violet deMauve',
            color: 'Purple'
        },
        {
            name: 'Tommo Cinnabar',
            color: 'Red'
        },
        {
            name: 'Courtland Gamboge',
            color: 'Yellow'
        },
        {
            name: 'Mr Turquoise',
            color: 'Blue'
        }
    ]

    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                characters: characters,
                type: CharacterActionTypes.GET_ALL,
            })
        } catch (err) {
            console.error(err)
        }
    }
}
