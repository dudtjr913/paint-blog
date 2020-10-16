import { put, takeLatest, fork, call, all, delay } from 'redux-saga/effects';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
  CHANGE_EMAIL_REQUEST,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_EMAIL_FAILURE,
  CHANGE_PHONE_REQUEST,
  CHANGE_PHONE_SUCCESS,
  CHANGE_PHONE_FAILURE,
} from '../reducers/user';
// import axios from 'axios';

/*function logInData(data) {
  axios.patch('/user', data);
}*/

function* logIn(action) {
  try {
    yield delay(1000);
    //yield call(logInData, action.data)
    console.log(action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOG_IN_FAILURE,
      error,
    });
  }
}

/*function logOutData(data) {
  axios.delete('/user');
}*/

function* logOut(action) {
  try {
    yield delay(1000);
    //yield call(logOutData)
    console.log(action.data);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOG_OUT_FAILURE,
      error,
    });
  }
}

/*function changeNicknameData(data) {
  axios.patch(`/user/${data}`, data);
}*/

function* changeNickname(action) {
  try {
    yield delay(1000);
    //yield call(changeNicknameData, action.data)
    console.log(action.data);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error,
    });
  }
}

/*function changeEmailnameData(data) {
  axios.patch(`/user/${data}` data);
}*/

function* changeEmail(action) {
  try {
    yield delay(1000);
    //yield call(changeEmailData, action.data)
    console.log(action.data);
    yield put({
      type: CHANGE_EMAIL_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: CHANGE_EMAIL_FAILURE,
      error,
    });
  }
}

/*function changePhoneData(data) {
  axios.patch(`/user/${data}`, data);
}*/

function* changePhone(action) {
  try {
    yield delay(1000);
    //yield call(changePhoneData, action.data)
    console.log(action.data);
    yield put({
      type: CHANGE_PHONE_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: CHANGE_PHONE_FAILURE,
      error,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

function* watchChangeEmail() {
  yield takeLatest(CHANGE_EMAIL_REQUEST, changeEmail);
}

function* watchChangePhone() {
  yield takeLatest(CHANGE_PHONE_REQUEST, changePhone);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchChangeNickname),
    fork(watchChangeEmail),
    fork(watchChangePhone),
  ]);
}
