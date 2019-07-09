import {CHANGE_SEARCH_FIELD} from './constants';

// Implementing REDUX:
// step 01: Creating an action ...
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})