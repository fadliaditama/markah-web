/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable indent */
const initialState = {
  data: [],
  detail: [],
  pageInfo: {},
};

const classes = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_CLASS':
      return {
        ...state,
        data: action.payload.classes,
        pageInfo: action.payload.pageInfo,
      };
    case 'SET_NEXT_CLASS':
      return {
        ...state,
        data: [...state.data, ...action.payload.classes],
        pageInfo: action.payload.pageInfo,
      };
    case 'SET_GET_DETAILS_CLASS':
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default classes;