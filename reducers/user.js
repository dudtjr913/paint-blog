import faker from 'faker';

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

const user = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_CHANGE_NICKNAME:
      return {
        ...state,
        clickChangeNickname: action.data,
      };
    case CLICK_CHANGE_EMAIL:
      return {
        ...state,
        clickChangeEmail: action.data,
      };
    case CLICK_CHANGE_PHONE:
      return {
        ...state,
        clickChangePhone: action.data,
      };
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        LogInError: false,
        me: {
          id: action.data.id,
          nickname: faker.name.firstName(),
          password: action.data.password,
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
        },
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInDone: false,
        logInError: action.error,
      };

    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: false,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        logOutError: false,
        me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: false,
        logOutError: action.error,
      };

    case CHANGE_NICKNAME_REQUEST:
      return {
        ...state,
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: false,
      };
    case CHANGE_NICKNAME_SUCCESS:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameDone: true,
        changeNicknameError: false,
        clickChangeNickname: false,
        me: {
          ...state.me,
          nickname: action.data,
        },
      };
    case CHANGE_NICKNAME_FAILURE:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameDone: false,
        changeNicknameError: action.error,
      };

    case CHANGE_EMAIL_REQUEST:
      return {
        ...state,
        changeEmailLoading: true,
        changeEmailDone: false,
        changeEmailError: false,
      };
    case CHANGE_EMAIL_SUCCESS:
      return {
        ...state,
        changeEmailLoading: false,
        changeEmailDone: true,
        changeEmailError: false,
        clickChangeEmail: false,
        me: {
          ...state.me,
          email: action.data,
        },
      };
    case CHANGE_EMAIL_FAILURE:
      return {
        ...state,
        changeEmailLoading: false,
        changeEmailDone: false,
        changeEmailError: action.error,
      };

    case CHANGE_PHONE_REQUEST:
      return {
        ...state,
        changePhoneLoading: true,
        changePhoneDone: false,
        changePhoneError: false,
      };
    case CHANGE_PHONE_SUCCESS:
      return {
        ...state,
        changePhoneLoading: false,
        changePhoneDone: true,
        changePhoneError: false,
        clickChangePhone: false,
        me: {
          ...state.me,
          phone: action.data,
        },
      };
    case CHANGE_PHONE_FAILURE:
      return {
        ...state,
        changePhoneLoading: false,
        changePhoneDone: false,
        changePhoneError: action.error,
      };

    default:
      return state;
  }
};

export default user;
