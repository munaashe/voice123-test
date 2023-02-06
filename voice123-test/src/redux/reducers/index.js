import { combineReducers } from "redux";
import { voiceActorsReducer, selectedProfileReducer} from "./voiceActorsReducer";

export default combineReducers({
  voiceActors: voiceActorsReducer,
  profile: selectedProfileReducer
});