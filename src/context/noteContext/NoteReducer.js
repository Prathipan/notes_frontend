const NoteReducer = (state, action) => {
  switch (action.type) {
    case "GET_NOTES_START":
      return {
        notes: [],
        isLoading: true,
        error: false,
      };
    case "GET_NOTES_SUCCESS":
      return {
        notes: action.payload,
        isLoading: false,
        error: false,
      };
    case "GET_NOTES_FAILURE":
      return {
        notes: [],
        isLoading: false,
        error: true,
      };
    case "CREATE_NOTES_START":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "CREATE_NOTES_SUCCESS":
      return {
        notes: [...state.notes, action.payload],
        isLoading: false,
        error: false,
      };
    case "CREATE_NOTES_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case "UPDATE_NOTES_START":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "UPDATE_NOTES_SUCCESS":
      return {
        notes: state.notes.map(
          (note) => note._id === action.payload._id && action.payload
        ),
        isLoading: false,
        error: false,
      };
    case "UPDATE_NOTES_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case "DELETE_NOTES_START":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "DELETE_NOTES_SUCCESS":
      return {
        notes: state.notes.filter((note) => note._id !== action.payload),
        isLoading: false,
        error: false,
      };
    case "DELETE_NOTES_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default : 
      return {...state}
  }
};


export default NoteReducer;