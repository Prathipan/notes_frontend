import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteNotes } from "../context/noteContext/apiCall";
import { NotesContext } from "../context/noteContext/NoteContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NoteCard = ({ note }) => {
  //   console.log(note.body);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { dispatch } = useContext(NotesContext);

  const handleDelete = (id) => {
    deleteNotes(id, dispatch);
  };

  return (
    <React.Fragment>
      <Card
        sx={{
          minWidth: { xs: 275, md: 350 },
          maxWidth: 275,
          minHeight: 200,
          margin: "20px 20px 0 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {note.title}
          </Typography>

          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            {note.body.length > 100 ? (
              <span>{note.body.slice(0, 100)}...</span>
            ) : (
              <span>{note.body}</span>
            )}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" onClick={handleClickOpen}>
            View note
          </Button>
          <Box>
            <DeleteIcon
              sx={{ color: "red", marginLeft: "5px", cursor: "pointer" }}
              onClick={() => handleDelete(note._id)}
            />
            <EditIcon
              onClick={() => navigate(note._id, { state: note })}
              sx={{ color: "blue", marginLeft: "5px", cursor: "pointer" }}
            />
          </Box>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{note.title}</DialogTitle>
        <DialogContent sx={{ minWidth: "400px" }}>
          <DialogContentText id="alert-dialog-slide-description">
            {note.body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={() => navigate(note._id, { state: note })}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default NoteCard;
