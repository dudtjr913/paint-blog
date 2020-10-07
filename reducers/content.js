import faker from 'faker';
import shortId from 'shortid';

const initialState = {
  contents: [],
  hasMoreContents: true,
};

const dummy = (number) => {
  const dummyData = [];
  for (let i = 1; i <= number; i++) {
    dummyData.push({
      id: shortId.generate(),
      title: faker.lorem.word(),
      imageSrc: faker.image.image(),
      href: 'https://naver.com',
    });
  }
  return dummyData;
};

const dummyContents = [];

const content = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
      dummyContents.push(...dummy(50));
      return {
        ...state,
      };
    case 'MORE_CONTENT':
      const mainContents = [];
      mainContents.push(...dummyContents.splice(0, 8));
      const hasContent = dummyContents.length > 0;
      return {
        ...state,
        contents: [...state.contents, ...mainContents],
        hasMoreContents: hasContent,
      };
    default:
      return state;
  }
};

export default content;
