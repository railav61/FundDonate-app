import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
// import { useNavigate } from "react-router-dom";

// const pages = ["hello", "hello1", "hello2"];

function First({
  SetModeofdisp,
  user,
  loginWithRedirect,
  isAuthenticated,
  logout,
}) {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const navigate = useNavigate();

  let profilePic = "";
  if (user != null) {
    profilePic = user.picture;
  } else {
    profilePic = "";
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "0rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              FundDonate.
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {isAuthenticated ? (
                <Button
                  variant="contained"
                  sx={{ ml: 1, px: 3 }}
                  onClick={() => {
                    logout();
                  }}
                >
                  LogOut
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ ml: 1, px: 2 }}
                  onClick={() => {
                    loginWithRedirect();
                  }}
                >
                  Signup
                </Button>
              )}
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FundDonate.
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profilePic} />
              </IconButton>
            </Tooltip>
            {/* <Menu
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
              {isAuthenticated ? (
                <div>
                  <MenuItem>
                    <div
                      onClick={() => {
                        navigate("/Profile");
                      }}
                      className="text-blue-600 text-center w-full text-lg font-thin"
                    >
                      Profile
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="text-blue-600 text-center w-full text-lg font-thin">
                      Account
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="text-blue-600 text-center w-full text-lg font-thin">
                      Dashboard
                    </div>
                  </MenuItem>
                </div>
              ) : (
                <MenuItem>
                  <p className="text-center">Not Logged In yet</p>
                </MenuItem>
              )}
            </Menu> */}
            {/* <ThemeMode SetModeofdisp={SetModeofdisp} /> */}
            {isAuthenticated ? (
              <Button
                variant="contained"
                sx={{ ml: 2, px: 3 }}
                onClick={() => {
                  logout();
                }}
              >
                LogOut
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ ml: 2, px: 2 }}
                onClick={() => {
                  loginWithRedirect();
                }}
              >
                Signup
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default First;
