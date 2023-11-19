import axios from "axios";
import { createNotesFailure, createNotesStart, createNotesSuccess, deleteNotesFailure, deleteNotesStart, deleteNotesSuccess, getNotesFailure, getNotesStart, getNotesSuccess, updateNotesFailure, updateNotesStart, updateNotesSuccess } from "./NoteActions"
import { api } from "../../api";


export const getNotes = async(dispatch) => {
    dispatch(getNotesStart());
    try {
        const res = await axios.get(`${api}/notes`,{
            headers : {
                Authorization : JSON.parse(localStorage.getItem("user")).token
            }
        })
        // console.log(res.data);
        dispatch(getNotesSuccess(res.data));
    } catch (error) {
        dispatch(getNotesFailure(error))
    }
}

export const createNotes = async(notes,dispatch) => {
    dispatch(createNotesStart());
    try {
        const res = await axios.post(`${api}/notes/create`,notes,{
            headers : {
                Authorization : JSON.parse(localStorage.getItem("user")).token
            }
        })
        // console.log(res.data);
        dispatch(createNotesSuccess(res.data));
    } catch (error) {
        dispatch(createNotesFailure(error))
    }
}

export const updateNotes = async(note,dispatch) => {
    dispatch(updateNotesStart());
    try {
        const res = await axios.put(`${api}/notes/${note._id}`,note,{
            headers : {
                Authorization : JSON.parse(localStorage.getItem("user")).token
            }
        })
        dispatch(updateNotesSuccess(res.data))
    } catch (error) {
        dispatch(updateNotesFailure(error))
    }
}

export const deleteNotes = async(id,dispatch) => {
  dispatch(deleteNotesStart());
  try {
    const res = await axios.delete(`${api}/notes/${id}`,{
        headers : {
            Authorization : JSON.parse(localStorage.getItem("user")).token
        }
    })
    dispatch(deleteNotesSuccess(res.data))
    getNotes(dispatch);
  } catch (error) {
    dispatch(deleteNotesFailure(error))
  }
}