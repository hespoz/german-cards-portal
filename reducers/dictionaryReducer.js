import {
    SEARCH_BY_KEYWORD_SUCCESS,
    CLOSE_SEARCH,
    OPEN_SEARCH,
    SEARCH_BY_KEYWORD_LOADING
} from "../constants";

export default function reducer(state = {
    searchResult:[],
    open:false,
    loading:false
}, action) {
    switch (action.type) {
        case SEARCH_BY_KEYWORD_SUCCESS:
            return {
                ...state,
                searchResult:action.payload,
                loading:false
            }
            break;
        case CLOSE_SEARCH:
            return {
                ...state,
                open:false,
                loading:false
            }
            break;
        case OPEN_SEARCH:
            return {
                ...state,
                open:true,
                searchResult:[]
            }
            break;
        case SEARCH_BY_KEYWORD_LOADING:
            return {
                ...state,
                loading:true
            }
            break;
        default:
            break;
    }

    return state
}