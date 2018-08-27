import { put, call, takeEvery, all } from 'redux-saga/effects';
import { SEARCH_BY_KEYWORD } from "../constants";
import apiHelper from '../apiHelper'

import {
    searchByKeywordSuccess,
    searchByKeywordError
} from '../actions/dictionaryAction';

function* searchByKeyword(action) {
    try {
        let result = []
        if(action.payload.keyword !== '') {
            const res = yield call(apiHelper.searchByKeyword, action.payload)
            result = res.data
        }
        yield put(searchByKeywordSuccess(result))
    } catch (error) {
        yield put(searchByKeywordError(error))
    }
}

export default function* dictionarySaga() {
    yield all([
        takeEvery(SEARCH_BY_KEYWORD, searchByKeyword)
    ])
}
