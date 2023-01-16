import { getWordsFromDb } from "../../db";
import {
  ADD_NEW_WORD,
  FETCH_WORDS,
  UPDATE_WORD,
} from "../actions/Words_ActionTypes";
import { fetchWords } from "../actions/Words_Actions";

const initialState = {
  loading: true,
  words: [],
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_WORDS:
      return { ...state, words: payload };
    case ADD_NEW_WORD:
      const newWords = [...state.words, payload];
      return { ...state, words: newWords };
    case UPDATE_WORD:
      const updateWords = [...state.words].map((wd) => {
        if (wd.name === payload.name) {
          wd.meaning = payload.meaning;
          wd.example = payload.example;
          wd.createdAt = Date.now();
        }
        return wd;
      });
      return { ...state, words: updateWords };
    default:
      return state;
  }
};
export default reducer;

export function initialiseWords() {
  return async (dispatch) => {
    const data = await import("../../assets/data/words.json").then(
      ({ default: myData }) => myData
    );
    const fromDB = await getWordsFromDb().catch(() => []);
    const combine = data.concat(fromDB);
    dispatch(fetchWords(combine));
  };
}