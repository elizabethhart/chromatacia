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
        color: 'Red',
        image: 'https://i.pinimg.com/736x/c9/da/62/c9da6259c6cd800f74febcff2d1fedfe.jpg'
    },
    {
        name: 'Jane G23',
        color: 'Grey',
        image: 'https://www.pantone.com/images/products/108000009-pantone-card-holder-pms-cool-gray-9-product.jpg'
    },
    {
        name: 'Violet deMauve',
        color: 'Purple',
        image: 'https://i.pinimg.com/originals/4e/17/2d/4e172dcfad8b90eb26397ade91f3ae17.png'
    },
    {
        name: 'Tommo Cinnabar',
        color: 'Red',
        image: 'https://i.pinimg.com/originals/24/4e/02/244e02111bbb8bd56693083f30231c50.png'
    },
    {
        name: 'Courtland Gamboge',
        color: 'Yellow',
        image: 'https://www.pantone.com/images/products/108000012-pantone-card-holder-pms-012-product.jpg'
    },
    {
        name: 'Mr Turquoise',
        color: 'Blue',
        image: 'https://i.pinimg.com/originals/ac/0f/84/ac0f8435959e50ff2724ae0cc967850e.png'
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
