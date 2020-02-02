import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ICharacter, ICharacterState } from '../reducers/characterReducer'

export enum CharacterActionTypes {
    GET_ALL = 'GET_ALL',
    GET_ONE = 'GET_ONE',
}

export interface ICharacterGetAllAction {
    type: CharacterActionTypes.GET_ALL
    characters: ICharacter[]
}

export interface ICharacterGetOneAction {
    type: CharacterActionTypes.GET_ONE
    character: ICharacter
}

export type CharacterActions = ICharacterGetAllAction | ICharacterGetOneAction;

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

export const getAllCharacters: ActionCreator<ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>> = () => {
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

// export const getOneCharacter: ActionCreator<ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetOneAction>> = () = {
//     return async (dispatch: Dispatch) => {
//         try {
//             dispatch({
//                 character: characters[0],
//                 type: CharacterActionTypes.GET_ONE
//             })
//         } catch (err) {
//             console.error(err)
//         }
//     }
// }
