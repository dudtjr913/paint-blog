import faker from 'faker';
import shortId from 'shortid';

const initialState = {
  contents: [],
  categoryLists: [
    {
      title: 'items1',
      key: 'items1',
      children: [
        {
          title: '1',
          key: '1',
        },
        {
          title: '2',
          key: '2',
        },
        {
          title: '3',
          key: '3',
        },
      ],
    },
    {
      title: 'items2',
      key: 'items2',
      children: [
        {
          title: '4',
          key: '4',
        },
        {
          title: '5',
          key: '5',
        },
        {
          title: '6',
          key: '6',
        },
      ],
    },
  ],
  editCategoryLoading: false,
  editCategoryDone: false,
  editCategoryError: false,
  addCategoryLoading: false,
  addCategoryDone: false,
  addCategoryError: false,
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

export const EDIT_CATEGORY_REQUEST = 'EDIT_CATEGORY_REQUEST';
export const EDIT_CATEGORY_SUCCESS = 'EDIT_CATEGORY_SUCCESS';
export const EDIT_CATEGORY_FAILURE = 'EDIT_CATEGORY_FAILURE';

export const ADD_CATEGORY_REQUEST = 'ADD_CATEGORY_REQUEST';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAILURE = 'ADD_CATEGORY_FAILURE';

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
    case EDIT_CATEGORY_REQUEST:
      return {
        ...state,
        editCategoryLoading: true,
        editCategoryDone: false,
        editCategoryError: false,
      };
    case EDIT_CATEGORY_SUCCESS: {
      const copyCategory = JSON.parse(JSON.stringify(state.categoryLists));
      let findCategory = copyCategory.find((v) => v.key === action.data.id);
      if (!findCategory) {
        findCategory = copyCategory.map((v) =>
          v.children.find((v) => v.key === action.data.id)
        );
        findCategory = findCategory.filter((v) => v !== undefined)[0];
      }
      console.log(findCategory);
      findCategory.title = action.data.value;
      return {
        ...state,
        editCategoryLoading: false,
        editCategoryDone: true,
        editCategoryError: false,
        categoryLists: [...copyCategory],
      };
    }
    case EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        editCategoryLoading: false,
        editCategoryDone: false,
        editCategoryError: action.error,
      };
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        addCategoryLoading: true,
        addCategoryDone: false,
        addCategoryError: false,
      };
    case ADD_CATEGORY_SUCCESS: {
      const copyCategory = JSON.parse(JSON.stringify(state.categoryLists));
      if (!action.data) {
        copyCategory.push({
          title: '게시판',
          key: shortId.generate(),
          children: [],
        });
      }
      if (action.data) {
        const findCategoryIndex = copyCategory.findIndex(
          (v) => v.key === action.data
        );
        if (!findCategoryIndex) {
          if (
            copyCategory.map((v) =>
              v.children.find((v) => v.key === action.data)
            )[0]
          ) {
            alert('카테고리는 2차 분류까지 만들 수 있습니다.');
          }
        }
        copyCategory[findCategoryIndex].children.push({
          title: '게시판',
          key: shortId.generate(),
        });
      }
      return {
        ...state,
        addCategoryLoading: false,
        addCategoryDone: true,
        addCategoryError: false,
        categoryLists: [...copyCategory],
      };
    }
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        addCategoryLoading: false,
        addCategoryDone: false,
        addCategoryError: action.error,
      };
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
