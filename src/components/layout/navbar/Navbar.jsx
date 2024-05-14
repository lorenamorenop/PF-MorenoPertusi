import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "../../common/cartWidget/CartWidget";
import logo from "../../../imagenes/WEIN.-2.png";
import "../navbar/Navbar.css";
import { CenterFocusStrong } from "@mui/icons-material";

const pages = [
  { name: "Todos", path: "/" },
  { name: "Ligeros", path: "/category/ligeros" },
  { name: "Pet nat", path: "/category/pet-nat" },
  { name: "Blancos", path: "/category/blancos" },
  { name: "Tintos", path: "/category/tintos" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
      <Container className="containerNav" maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              color: "black",
            }}
          >
            <Link to="/">
              <img src={logo} alt="Logo de mi página" className="logo" />
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.path} className="menu-link">
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                color="inherit"
                component={Link}
                to={page.path}
                sx={{
                  color: "#b03b22",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Link to="/Cart">
            <CartWidget />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

// import CartWidget from "../../common/cartWidget/CartWidget";
// import "../navbar/Navbar.css";
// import logo from "../../../imagenes/wein.png";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <div className="containerNav">
//       <div className="logo-container">
// <Link to="/">
//   <img src={logo} alt="Logo de mi página" className="logo" />
// </Link>
//       </div>
//       <ul className="listaNav">
//         <Link to="/"> Todos</Link>
//         <Link to="category/ligeros">Ligeros</Link>
//         <Link to="category/pet-nat">Pet nat</Link>
//         <Link to="category/blancos">Blancos</Link>
//         <Link to="category/tintos">Tintos</Link>
//       </ul>
//       <Link to="/Cart">
//         <CartWidget />
//       </Link>
//     </div>
//   );
// };
