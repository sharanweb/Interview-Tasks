

export const ADD_COUNT = "ADD_COUNT";

//action creator
export const addCount = (data)=>{
    return {
        type: ADD_COUNT,
        payload: data,
    }
}