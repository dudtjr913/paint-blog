const initialState = {
  me: null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        me: action.data,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        me: null,
      };
    default:
      return state;
  }
};

export default user;
