export const getNotesStart = () => ({
    type : "GET_NOTES_START"
});

export const getNotesSuccess = (notes) => ({
    type : "GET_NOTES_SUCCESS",
    payload : notes,
});

export const getNotesFailure = () => ({
    type : "GET_NOTES_FAILURE"
});

export const createNotesStart = () => ({
    type : "CREATE_NOTES_START"
});

export const createNotesSuccess = (notes) => ({
    type : "CREATE_NOTES_SUCCESS",
    payload : notes,
});

export const createNotesFailure = () => ({
    type : "CREATE_NOTES_FAILURE"
});

export const updateNotesStart = () => ({
    type : "UPDATE_NOTES_START"
});

export const updateNotesSuccess = (notes) => ({
    type : "UPDATE_NOTES_SUCCESS",
    payload : notes,
});

export const updateNotesFailure = () => ({
    type : "UPDATE_NOTES_FAILURE"
});

export const deleteNotesStart = () => ({
    type : "DELETE_NOTES_START"
});

export const deleteNotesSuccess = (id) => ({
    type : "DELETE_NOTES_SUCCESS",
    payload : id,
});

export const deleteNotesFailure = () => ({
    type : "DELETE_NOTES_FAILURE"
});
