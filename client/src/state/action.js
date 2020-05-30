import { fetchFilter, fetchOwner } from "../services";
import {
  owners_error,
  owners_fetched,
  owners_goto_page,
  owners_loading,
  owners_previous,
  owners_next,
  filter_fetched,
  filter_error,
  filter_loading,
} from "./types";

export const fetchFilters = () => (dispatch) => {
  dispatch({
    type: filter_loading,
  });

  fetchFilter().then(
    (res) => {
      dispatch({
        type: filter_fetched,
        payload: res.data,
      });
    },
    (err) => {
      dispatch({
        type: filter_error,
        payload: err.data.message,
      });
    }
  );
};

export const fetchOwners = (filter) => (dispatch) => {
  dispatch({
    type: owners_loading,
  });
  fetchOwner(filter).then(
    (res) => {
      dispatch({
        type: owners_fetched,
        payload: res.data.data,
      });
    },
    (err) => {
      console.log(err);
      dispatch({
        type: owners_error,
        payload: err.data,
      });
    }
  );
};

export const gotoPage = (page) => (dispatch) => {
  const payload = Number(page);
  if (Number.isNaN(payload)) {
    return;
  }

  dispatch({ type: owners_goto_page, payload });
};

export const previous = () => (dispatch) => {
  dispatch({ type: owners_previous });
  // window.location.reload();
};

export const next = () => (dispatch) => {
  dispatch({ type: owners_next });
  // window.location.reload();
};
