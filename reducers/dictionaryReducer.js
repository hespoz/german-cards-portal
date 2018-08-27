import {
    SEARCH_BY_KEYWORD_SUCCESS
} from "../constants";

export default function reducer(state = {
    searchResult:[]
}, action) {
    switch (action.type) {
        case SEARCH_BY_KEYWORD_SUCCESS:
            return {
                ...state,
                searchResult:action.payload
            }
            break;
        default:
            break;
    }

    return state
}