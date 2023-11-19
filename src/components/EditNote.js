import "../../src/App.css";
import { Button, Container, TextField } from "@mui/material";
import React, { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLocation, useNavigate } from "react-router-dom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useFormik } from "formik";
import * as yup from "yup"
import {  updateNotes } from "../context/noteContext/apiCall";
import { NotesContext } from "../context/noteContext/NoteContext";

const EditNote = () => {

    const location = useLocation()
    
    const note = location.state;

    const {dispatch} = useContext(NotesContext);
  const navigate = useNavigate();

  const noteValidation = yup.object({
    title : yup.string().required("title is required")
  })

  const formik = useFormik({
    initialValues : {
        title : note.title,
        body : note.body
    },
    validationSchema : noteValidation,
    onSubmit : (values,{resetForm}) => {
        // console.log({...note,...values})
          updateNotes({...note,...values},dispatch)
          resetForm();
          navigate("/home")
    }
  })

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <div className="createNote">
        <div className="noteTop">
          <Button variant="outlined" onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
          </Button>
          <Button variant="contained" onClick={formik.handleSubmit}>Update</Button>
        </div>
        <form>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              variant="standard"
              placeholder="Title.."
              InputProps={{
                sx: {
                  fontSize: "20px",
                },
              }}
              sx={{ width: "90%" }}
              name = "title"
              id="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && formik.errors.title}
              helperText={
                formik.touched.title && formik.errors.title
                  ? formik.errors.title
                  : ""
              }
            />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={25}
              placeholder="Write here..."
              style={{ width: "90%", marginTop: "10px", borderColor: "gray",letterSpacing : "1.5px",fontFamily: "Gill Sans, sans-serif"  }}
              name = "body"
              id="body"
              value={formik.values.body}
              onChange={formik.handleChange}
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default EditNote;
