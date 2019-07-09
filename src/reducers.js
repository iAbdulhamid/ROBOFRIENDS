import {CHANGE_SEARCH_FIELD} from './constants';

// Implementing REDUX:
// step 02: Creating a reducer ...

// setting the initail state for the sreach field [our action]...
const intialState = {
    searchField: ''
}
// creating the Reducer [our function]
export const searchRobots = (state=intialState, action={}) => {

    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // returning a [new state] with the 3 principles:
            // updating the intailState [state] with the new object [{searchField: action.payload}]
            return Object.assign({}, state, {searchField: action.payload})
            // another way: we can use [spread operator] ..
            //return {...state, searchField: action.payload}
    
        default:
            return state;
    }
}