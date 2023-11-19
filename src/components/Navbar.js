import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/userContext/AuthContext";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const { user } = useContext(AuthContext);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () =>{
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div></div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Notes Plus
          </Typography>
          <Box sx={{ display: "flex", marginRight: "20px" }}>
            {user && (
              <>
                <Button
                  sx={{
                    backgroundColor: "white",
                    color: "blue",
                    marginRight: "10px",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                  onClick={() => navigate("/create-note")}
                >
                  Create Note
                </Button>
                {/* <Button
                  sx={{
                    backgroundColor: "white",
                    color: "blue",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  LOGOUT
                </Button> */}
                <Box sx={{ flexGrow: 0 }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar>{user.name[0]}</Avatar>
                  </IconButton>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem>
                      <Typography textAlign="center">Hi, {user.name}</Typography>
                    </MenuItem>
                    <MenuItem> 
                      <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
