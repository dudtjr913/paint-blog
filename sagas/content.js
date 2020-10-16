import { put, takeLatest, fork, call, all, delay } from 'redux-saga/effects';
import {
  dummy,
  MORE_CONTENTS_FAILURE,
  MORE_CONTENTS_REQUEST,
  MORE_CONTENTS_SUCCESS,
  LOAD_CONTENT_FAILURE,
  LOAD_CONTENT_REQUEST,
  LOAD_CONTENT_SUCCESS,
  ADD_CONTENT_REQUEST,
  ADD_CONTENT_SUCCESS,
  ADD_CONTENT_FAILURE,
} from '../reducers/content';
// import axios from "axios"

/*function moreContentsData(data){
    axios.get(`/content/${data}`)
}*/

function* moreContents() {
  try {
    yield delay(1000);
    //yield call(moreContentsData, action.data);
    yield put({
      type: MORE_CONTENTS_SUCCESS,
      data: dummy(8),
    });
  } catch (error) {
    yield put({
      type: MORE_CONTENTS_FAILURE,
      error,
    });
  }
}

/*function loadContentData(data){
    axios.get(`/content/${data}`)
}*/

function* loadContent(action) {
  try {
    yield delay(1000);
    //yield call(loadContentData, action.data);
    yield put({
      type: LOAD_CONTENT_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_CONTENT_FAILURE,
      error,
    });
  }
}

/*function addContentData(data){
    axios.post('/content', data)
}*/

function* addContent(action) {
  try {
    yield delay(1000);
    //yield call(addContentData, action.data);
    yield put({
      type: ADD_CONTENT_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: ADD_CONTENT_FAILURE,
      error,
    });
  }
}

function* watchMoreContents() {
  yield takeLatest(MORE_CONTENTS_REQUEST, moreContents);
}

function* watchLoadContent() {
  yield takeLatest(LOAD_CONTENT_REQUEST, loadContent);
}

function* watchAddContent() {
  yield takeLatest(ADD_CONTENT_REQUEST, addContent);
}

export default function* contentSaga() {
  yield all([
    fork(watchMoreContents),
    fork(watchLoadContent),
    fork(watchAddContent),
  ]);
}
