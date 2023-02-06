import { FETCH_DATA, SELECTED_PROFILE } from './types'

export const setVoiceActors = (voiceActors) => {
    return {
        type: FETCH_DATA,
        payload: voiceActors,
    }
};


export const selectedProfile = (profile) => {
    return {
        type: SELECTED_PROFILE, 
        payload: profile
    }
}