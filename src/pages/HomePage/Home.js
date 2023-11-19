import React, { useContext, useEffect, useState } from "react";
import { getNotes } from "../../context/noteContext/apiCall";
import { NotesContext } from "../../context/noteContext/NoteContext";
import { Container } from "@mui/material";
import NoteCard from "../../components/NoteCard";
import Box from "@mui/material/Box";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const Home = () => {
  const { notes, dispatch } = useContext(NotesContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getNotes(dispatch);
  }, [dispatch]);

  // console.log(search);

  const handleChange = (e) => {
    let val = e.target.value;
    setSearch(val);
  };

  return (
    <>
      <Container
        sx={{
          marginTop: "10px",
        }}
      >
        <TextField
          id="search"
          variant="outlined"
          placeholder="Type something...(eg : java)"
          sx={{ width: "100%" }}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-around" },
            flexWrap: "wrap",
          }}
        >
          {notes.filter((note) =>{
            return search.toLowerCase() === "" ? note : note.title.toLowerCase().includes(search)
          }).map((note, index) => {
            return <NoteCard key={index} note={note} />;
          })}
        </Box>
      </Container>
    </>
  );
};

export default Home;
