import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailMovieReducer from "./../../containers/home/DetailPage/modules/reducer";

const rootReducer = combineReducers({
  movieReducer,
  detailMovieReducer
});

export default rootReducer;
