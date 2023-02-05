import axios from "axios";
import { FETCH_DATA } from './types'

export const fetchData = searchTerm => async dispatch => {
    const voiceActors = await axios.get(`https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=${searchTerm}&page=1`);
    dispatch({
        type: FETCH_DATA,
        payload: {
            voiceActors: voiceActors.data.results,
        }
    });
};
