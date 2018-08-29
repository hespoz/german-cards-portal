import {
    SEARCH_BY_KEYWORD_SUCCESS,
    CLOSE_SEARCH
} from "../constants";

export default function reducer(state = {
    searchResult:[],
    open:false
}, action) {
    switch (action.type) {
        case SEARCH_BY_KEYWORD_SUCCESS:
            return {
                ...state,
                searchResult:action.payload,
                open:true
            }
            break;
        case CLOSE_SEARCH:
            return {
                ...state,
                open:false
            }
            break;
        default:
            break;
    }

    return state
}