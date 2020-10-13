import faker from 'faker';
import shortId from 'shortid';

const initialState = {
  contents: [],
  loadContent: null,
  hasMoreContents: true,
};

export const ADD_CONTENT = 'ADD_CONTENT';
export const LOAD_CONTENTS = 'LOAD_CONTENTS';
export const MORE_CONTENTS = 'MORE_CONTENTS';
export const LOAD_CONTENT = 'LOAD_CONTENT';

const dummy = (number) => {
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

const dummyContents = [];

const addContent = (data) => ({
  id: shortId.generate(),
  title: data.title,
  imageSrc: faker.image.image(),
  text: data.text,
});

const content = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTENTS:
      dummyContents.push(...dummy(50));
      return {
        ...state,
      };
    case MORE_CONTENTS:
      const mainContents = [];
      mainContents.push(...dummyContents.splice(0, 8));
      const hasContent = dummyContents.length > 0;
      return {
        ...state,
        contents: [...state.contents, ...mainContents],
        hasMoreContents: hasContent,
      };
    case ADD_CONTENT:
      return {
        ...state,
        contents: [addContent(action.data), ...state.contents],
      };
    case LOAD_CONTENT:
      const load = state.contents.find((v) => v.id === action.data);
      return {
        ...state,
        loadContent: load,
      };
    default:
      return state;
  }
};

export default content;
