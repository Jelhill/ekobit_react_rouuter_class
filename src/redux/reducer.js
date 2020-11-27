import { albumsAvailable } from "./actions"

const initialState = {
    userDetails: {},
    albums: [],
    albumsAvailable: true,
    result: 0
}

const reducer = (state=initialState, action) => {
    const newState = {...state}
    
    if(action.type === "UPDATE_STATE_WITH_ALBUM") {
        console.log("Reducer", action)
        newState.albums = action.data
    }

    if(action.type === "ALBUM_AVAILABLE") {
        newState.albumsAvailable = action.status
    }

    if(action.type === "ADD_nUMBER_TO_RESULT") {
        newState.result = action.number
    }

    if(action.type === "SUBTRACT_NUMBER_FROM_RESULT") {
        newState.result = action.number
    }


    return newState
}

export default reducer
