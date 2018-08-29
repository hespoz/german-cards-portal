import {
    SEARCH_BY_KEYWORD,
    SEARCH_BY_KEYWORD_LOADING,
    SEARCH_BY_KEYWORD_SUCCESS,
    SEARCH_BY_KEYWORD_ERROR,
    ADD_NEW_WORD,
    ADD_NEW_WORD_SUCCESS,
    ADD_NEW_WORD_ERROR,
    CLOSE_SEARCH,
    OPEN_SEARCH
} from '../constants'

export const searchByKeyword = (keyword, exact) => ({
    type:SEARCH_BY_KEYWORD,
    payload: {keyword, exact}
})

export const searchByKeywordLoading = () => ({
    type:SEARCH_BY_KEYWORD_LOADING
})

export const searchByKeywordSuccess = (data) => ({
    type:SEARCH_BY_KEYWORD_SUCCESS,
    payload: data
})

export const searchByKeywordError = (data) => ({
    type:SEARCH_BY_KEYWORD_ERROR,
    payload: data
})


export const addNewWord = (data) => ({
    type:ADD_NEW_WORD,
    payload: data
})

export const addNewWordSuccess = (data) => ({
    type:ADD_NEW_WORD_SUCCESS,
    payload: data
})

export const addNewWordError = (data) => ({
    type:ADD_NEW_WORD_ERROR,
    payload: data
})

export const closeSearch = () => ({
    type:CLOSE_SEARCH
})

export const openSearch = () => ({
    type:OPEN_SEARCH
})