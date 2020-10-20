import faker from 'faker';
import shortId from 'shortid';
import produce from 'immer';

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
  removeCategoryLoading: false,
  removeCategoryDone: false,
  removeCategoryError: false,
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

export const REMOVE_CATEGORY_REQUEST = 'REMOVE_CATEGORY_REQUEST';
export const REMOVE_CATEGORY_SUCCESS = 'REMOVE_CATEGORY_SUCCESS';
export const REMOVE_CATEGORY_FAILURE = 'REMOVE_CATEGORY_FAILURE';

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

const content = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case EDIT_CATEGORY_REQUEST:
        draft.editCategoryLoading = true;
        draft.editCategoryDone = false;
        draft.editCategoryError = false;
        break;
      case EDIT_CATEGORY_SUCCESS: {
        const copyCategory = draft.categoryLists;
        let findCategory = copyCategory.find((v) => v.key === action.data.id);
        if (!findCategory) {
          findCategory = copyCategory.map((v) =>
            v.children.find((v) => v.key === action.data.id)
          );
          findCategory = findCategory.filter((v) => v !== undefined)[0];
        }
        findCategory.title = action.data.value;
        draft.editCategoryLoading = false;
        draft.editCategoryDone = true;
        draft.editCategoryError = false;
        draft.categoryLists = copyCategory;
        break;
      }
      case EDIT_CATEGORY_FAILURE:
        draft.editCategoryLoading = false;
        draft.editCategoryDone = false;
        draft.editCategoryError = action.error;
        break;

      case ADD_CATEGORY_REQUEST:
        draft.addCategoryLoading = true;
        draft.addCategoryDone = false;
        draft.addCategoryError = false;
        break;
      case ADD_CATEGORY_SUCCESS: {
        const copyCategory = draft.categoryLists;
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
          if (findCategoryIndex === -1) {
            if (
              copyCategory.map((v) =>
                v.children.find((v) => v.key === action.data)
              )
            ) {
              alert('카테고리는 2차 분류까지 만들 수 있습니다.');
            }
          }
          copyCategory[findCategoryIndex].children.push({
            title: '게시판',
            key: shortId.generate(),
          });
        }
        draft.addCategoryLoading = false;
        draft.addCategoryDone = true;
        draft.addCategoryError = false;
        draft.categoryLists = copyCategory;
        break;
      }
      case ADD_CATEGORY_FAILURE:
        draft.addCategoryLoading = false;
        draft.addCategoryDone = false;
        draft.addCategoryError = action.error;
        break;

      case REMOVE_CATEGORY_REQUEST:
        draft.removeCategoryLoading = true;
        draft.removeCategoryDone = false;
        draft.removeCategoryError = false;
        break;
      case REMOVE_CATEGORY_SUCCESS: {
        let copyCategory = draft.categoryLists;
        let findIndex = copyCategory.findIndex((v) => v.key === action.data);
        if (findIndex === -1) {
          for (let i = 0; i < copyCategory.length; i++) {
            for (let j = 0; j < copyCategory[i].children.length; j++) {
              if (copyCategory[i].children[j].key === action.data) {
                const con = confirm(
                  '내용이 모두 삭제됩니다. 정말로 삭제하시겠습니까?'
                );
                if (con) {
                  copyCategory[i].children.splice(j, 1);
                } else if (!con) {
                  alert('취소하셨습니다.');
                }
              }
            }
          }
        } else {
          const con = confirm(
            '내용이 모두 삭제됩니다. 정말로 삭제하시겠습니까?'
          );
          if (con) {
            copyCategory.splice(findIndex, 1);
          } else if (!con) {
            alert('취소하셨습니다.');
          }
        }
        draft.removeCategoryLoading = false;
        draft.removeCategoryDone = true;
        draft.removeCategoryError = false;
        draft.categoryLists = copyCategory;
        break;
      }
      case REMOVE_CATEGORY_FAILURE:
        draft.removeCategoryLoading = false;
        draft.removeCategoryDone = false;
        draft.removeCategoryError = action.error;
        break;

      case ADD_CONTENT_REQUEST:
        draft.addContentLoading = true;
        draft.addContentDone = false;
        draft.addContentError = false;
        break;
      case ADD_CONTENT_SUCCESS:
        draft.addContentLoading = false;
        draft.addContentDone = true;
        draft.addContentError = false;
        draft.contents.unshift(addContent(action.data));
        break;
      case ADD_CONTENT_FAILURE:
        draft.addContentLoading = false;
        draft.addContentDone = false;
        draft.addContentError = action.error;
        break;

      case MORE_CONTENTS_REQUEST:
        draft.moreContentsLoading = true;
        draft.moreContentsDone = false;
        draft.moreContentsError = false;
        draft.loadContentDone = null;
        break;
      case MORE_CONTENTS_SUCCESS:
        draft.moreContentsLoading = true;
        draft.moreContentsDone = false;
        draft.moreContentsError = false;
        draft.contents.push(...action.data);
        draft.hasMoreContents = draft.contents.length < 42;
        break;
      case MORE_CONTENTS_FAILURE:
        draft.moreContentsLoading = true;
        draft.moreContentsDone = false;
        draft.moreContentsError = false;
        break;

      case LOAD_CONTENT_REQUEST:
        draft.loadContentLoading = true;
        draft.loadContentDone = false;
        draft.loadContentError = false;
        break;
      case LOAD_CONTENT_SUCCESS:
        const load = draft.contents.find((v) => v.id === action.data);
        draft.loadContentLoading = true;
        draft.loadContentDone = load;
        draft.loadContentError = false;
        break;
      case LOAD_CONTENT_FAILURE:
        draft.loadContentLoading = true;
        draft.loadContentDone = false;
        draft.loadContentError = false;
        break;

      default:
        break;
    }
  });

export default content;
