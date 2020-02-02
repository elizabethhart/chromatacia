import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { characterReducer, ICharacterState } from '../reducers/characterReducer';

export interface IAppState {
    characterState: ICharacterState;
}

const rootReducer = combineReducers<IAppState>({
    characterState: characterReducer,
})

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}
