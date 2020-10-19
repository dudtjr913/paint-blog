import faker from 'faker';
import shortId from 'shortid';

const initialState = {
  contents: [],
  menuLists: [
    {
      title: 'items1',
      key: 'items1',
      children: [
        {
          title: 1,
          key: 1,
        },
        {
          title: 2,
          key: 2,
        },
        {
          title: 3,
          key: 3,
        },
      ],
    },
    {
      title: 'items2',
      key: 'items2',
      children: [
        {
          title: 4,
          key: 4,
        },
        {
          title: 5,
          key: 5,
        },
        {
          title: 6,
          key: 6,
        },
      ],
    },
  ],
  addContentLoading: false,
  addContentDone: false,
  addContentError: false,
  loadContentLoading: false,
  loadContentDone: null,
  loadContentError: false,
  moreContentsLoading: false,
  moreContentsDone: false,
  moreContentsError: false,
  hasMoreContents: true,
};

export const ADD_CONTENT_REQUEST = 'ADD_CONTENT_REQUEST';
export const ADD_CONTENT_SUCCESS = 'ADD_CONTENT_SUCCESS';
export const ADD_CONTENT_FAILURE = 'ADD_CONTENT_FAILURE';

export const LOAD_CONTENT_REQUEST = 'LOAD_CONTENT_REQUEST';
export const LOAD_CONTENT_SUCCESS = 'LOAD_CONTENT_SUCCESS';
export const LOAD_CONTENT_FAILURE = 'LOAD_CONTENT_FAILURE';

export const MORE_CONTENTS_REQUEST = 'MORE_CONTENTS_REQUEST';
export const MORE_CONTENTS_SUCCESS = 'MORE_CONTENTS_SUCCESS';
export const MORE_CONTENTS_FAILURE = 'MORE_CONTENTS_FAILURE';

export const dummy = (number) => {
  const dummyData = [];
  for (let i = 1; i <= number; i++) {
    dummyData.push({
      id: shortId.generate(),
      title: faker.lorem.word(),
      imageSrc: faker.image.image(),
      text: faker.lorem.paragraphs(),
    });
  }
  return dummyData;
};

const addContent = (data) => ({
  id: shortId.generate(),
  title: data.title,
  imageSrc: faker.image.image(),
  text: data.text,
});

const content = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT_REQUEST:
      return {
        ...state,
        addContentLoading: true,
        addContentDone: false,
        addContentError: false,
      };
    case ADD_CONTENT_SUCCESS:
      return {
        ...state,
        addContentLoading: false,
        addContentDone: true,
        addContentError: false,
        contents: [addContent(action.data), ...state.contents],
      };
    case ADD_CONTENT_FAILURE:
      return {
        ...state,
        addContentLoading: false,
        addContentDone: false,
        addContentError: action.error,
      };
    case MORE_CONTENTS_REQUEST:
      return {
        ...state,
        moreContentsLoading: true,
        moreContentsDone: false,
        moreContentsError: false,
        loadContentDone: null,
      };
    case MORE_CONTENTS_SUCCESS:
      return {
        ...state,
        moreContentsLoading: true,
        moreContentsDone: false,
        moreContentsError: false,
        contents: [...state.contents, ...action.data],
        hasMoreContents: state.contents.length < 42,
      };
    case MORE_CONTENTS_FAILURE:
      return {
        ...state,
        moreContentsLoading: true,
        moreContentsDone: false,
        moreContentsError: false,
      };

    case LOAD_CONTENT_REQUEST:
      return {
        ...state,
        loadContentLoading: true,
        loadContentDone: false,
        loadContentError: false,
      };
    case LOAD_CONTENT_SUCCESS:
      const load = state.contents.find((v) => v.id === action.data);
      return {
        ...state,
        loadContentLoading: true,
        loadContentDone: load,
        loadContentError: false,
      };
    case LOAD_CONTENT_FAILURE:
      return {
        ...state,
        loadContentLoading: true,
        loadContentDone: false,
        loadContentError: false,
      };

    default:
      return state;
  }
};

export default content;
