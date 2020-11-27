export const updateStateWithAlbums = (data) => {
    return {
        type: "UPDATE_STATE_WITH_ALBUM",
        data    
    }
}

export const albumsAvailable = (status) => {
    return {
        type: "ALBUM_AVAILABLE",
        status: status
    }
}

export const addNumberToResult = (number) => {
    return {
        type: "ADD_nUMBER_TO_RESULT",
        number
    }
}

export const subtractNumberFromResult = (number) => {
    return {
        type: "SUBTRACT_NUMBER_FROM_RESULT",
        number
    }
}