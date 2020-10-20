import faker from 'faker';
import produce from 'immer';

const initialState = {
  me: null,
  clickChangeNickname: false,
  clickChangeEmail: false,
  clickChangePhone: false,
  changeInf: null,
  logInLoading: false,
  logInDone: false,
  LogInError: false,
  logOutLoading: false,
  logOutDone: false,
  logOutError: false,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: false,
  changeEmailLoading: false,
  changeEmailDone: false,
  changeEmailError: false,
  changePhoneLoading: false,
  changePhoneDone: false,
  changePhoneError: false,
};

export const CLICK_CHANGE_NICKNAME = 'CLICK_CHANGE_NICKNAME';
export const CLICK_CHANGE_EMAIL = 'CLICK_CHANGE_EMAIL';
export const CLICK_CHANGE_PHONE = 'CLICK_CHANGE_PHONE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const CHANGE_EMAIL_REQUEST = 'CHANGE_EMAIL_REQUEST';
export const CHANGE_EMAIL_SUCCESS = 'CHANGE_EMAIL_SUCCESS';
export const CHANGE_EMAIL_FAILURE = 'CHANGE_EMAIL_FAILURE';

export const CHANGE_PHONE_REQUEST = 'CHANGE_PHONE_REQUEST';
export const CHANGE_PHONE_SUCCESS = 'CHANGE_PHONE_SUCCESS';
export const CHANGE_PHONE_FAILURE = 'CHANGE_PHONE_FAILURE';

const user = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CLICK_CHANGE_NICKNAME:
        draft.clickChangeNickname = action.data;
        break;
      case CLICK_CHANGE_EMAIL:
        draft.clickChangeEmail = action.data;
        break;
      case CLICK_CHANGE_PHONE:
        draft.clickChangePhone = action.data;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.LogInError = false;
        draft.me = {
          id: action.data.id,
          nickname: faker.name.firstName(),
          password: action.data.password,
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
        };
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logOutError = false;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutDone = false;
        draft.logOutError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = false;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        draft.changeNicknameError = false;
        draft.clickChangeNickname = false;
        draft.me.nickname = action.data;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = action.error;
        break;

      case CHANGE_EMAIL_REQUEST:
        draft.changeEmailLoading = true;
        draft.changeEmailDone = false;
        draft.changeEmailError = false;
        break;
      case CHANGE_EMAIL_SUCCESS:
        draft.changeEmailLoading = false;
        draft.changeEmailDone = true;
        draft.changeEmailError = false;
        draft.clickChangeEmail = false;
        draft.me.email = action.data;
        break;
      case CHANGE_EMAIL_FAILURE:
        draft.changeEmailLoading = false;
        draft.changeEmailDone = false;
        draft.changeEmailError = action.error;
        break;

      case CHANGE_PHONE_REQUEST:
        draft.changePhoneLoading = true;
        draft.changePhoneDone = false;
        draft.changePhoneError = false;
        break;
      case CHANGE_PHONE_SUCCESS:
        draft.changePhoneLoading = false;
        draft.changePhoneDone = true;
        draft.changePhoneError = false;
        draft.clickChangePhone = false;
        draft.me.phone = action.data;
        break;
      case CHANGE_PHONE_FAILURE:
        draft.changePhoneLoading = false;
        draft.changePhoneDone = false;
        draft.changePhoneError = action.error;
        break;

      default:
        break;
    }
  });

export default user;
