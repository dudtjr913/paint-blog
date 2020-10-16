import { fork, all } from 'redux-saga/effects';
import userSaga from './user';
import contentSaga from './content';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(contentSaga)]);
}
