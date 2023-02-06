import { FETCH_DATA, SELECTED_PROFILE } from '../actions/types'

const initialState = {
  voiceActors: [],
  profile: {}
}

export const voiceActorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return { ...state, voiceActors: payload };
    default:
      return state;
  }
};

export const selectedProfileReducer = (state = initialState.profile, { type, payload }) => {
  switch (type) {
    case SELECTED_PROFILE:
      return { ...state, profile: payload };
    default:
      return state;
  }
}