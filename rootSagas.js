import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import dictionarySaga from './sagas/dictionary';

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
    yield all([
        dictionarySaga()
    ]);
}
