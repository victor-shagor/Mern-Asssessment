import {
  owners_error,
  owners_fetched,
  owners_goto_page,
  owners_loading,
  owners_next,
  owners_previous,
  filter_fetched,
  filter_loading,
  filter_error,
} from "./types";

const initialState = {
  count: 0,
  startIndex: 0,
  page: 1,
  loading: false,
  error: null,
  owners: [],
  filter: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case owners_loading:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case filter_loading:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case filter_fetched: {
      return {
        ...state,
        filter: action.payload,
        loading: false,
        error: null,
      };
    }
    case owners_fetched: {
      const count = Math.ceil(action.payload.length / 10);

      return {
        ...state,
        loading: false,
        error: null,
        count,
        startIndex: 0,
        owners: action.payload,
        page: 1,
      };
    }
    case owners_error:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case filter_error:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    case owners_next: {
      const { page, count } = state;
      const pageToGo = page + 1;

      if (pageToGo > count) {
        return state;
      }

      return {
        ...state,
        page: pageToGo,
        startIndex: pageToGo * 10 - 10,
      };
    }
    case owners_previous: {
      const { page } = state;
      const pageToGo = page - 1;

      if (pageToGo < 1) {
        return state;
      }
      return {
        ...state,
        page: pageToGo,
        startIndex: pageToGo * 10 - 10,
      };
    }
    case owners_goto_page: {
      const pageToGo = action.payload;
      const { pages } = state;

      if (pageToGo > pages) {
        return state;
      }

      return {
        ...state,
        page: pageToGo,
        startIndex: pageToGo * 10 - 10,
      };
    }
    default:
      return state;
  }
};
