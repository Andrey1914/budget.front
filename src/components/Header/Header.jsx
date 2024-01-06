import * as React from "react";
import PropTypes from "prop-types";

// import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

import {
  Box,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {
  NavigationList,
  NavigationLink,
  DrowerItem,
  Title,
} from "./HeaderStyled";

const drawerWidth = 240;

export default function Header(props) {
  //   const isLoggedIn = useSelector(getIsLoggedIn);

  //   const { data } = refreshCurrentUser();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        // background: "linear-gradient(180deg, #4fbaf4 0%, #4af2ec 100%)",
      }}
    >
      <Title
        variant="h6"
        sx={{
          py: 2,
          color: "var(--text)",
          background: "linear-gradient(180deg, #4fbaf4 0%, #4af2ec 100%)",
        }}
      >
        Бюджет
      </Title>
      <Divider sx={{ borderColor: "var(--border-color)" }} />
      <NavigationList>
        <NavigationLink to="/income">
          <DrowerItem>Дохід</DrowerItem>
        </NavigationLink>
        <NavigationLink to="/expenses">
          <DrowerItem>Видаток</DrowerItem>
        </NavigationLink>
        <NavigationLink to="/">
          <DrowerItem>Консоль</DrowerItem>
        </NavigationLink>
        <NavigationLink to="/all-transactions">
          <DrowerItem>Історія</DrowerItem>
        </NavigationLink>
      </NavigationList>
      {/* <ThemeSwitch /> */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="header">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            padding: "0.7rem 0",
            background: "linear-gradient(to left, #4fbaf4 0%, #4af2ec 100%)",
          }}
        >
          {/* {!isLoggedIn ? ( */}
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "var(--text)" }}
            >
              <MenuIcon />
            </IconButton>
            <Title variant="h6">Бюджет</Title>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {/* <ThemeSwitch /> */}
              <NavigationList>
                <li>
                  <NavigationLink to="/income" exact="true">
                    Дохід
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/expenses" exact="true">
                    Видаток
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/" exact="true">
                    Консоль
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/all-transactions" exact="true">
                    Історія
                  </NavigationLink>
                </li>
              </NavigationList>
            </Box>
          </Toolbar>
          {/* ) : ( */}
          {/* <UserMenu data={data} /> */}
          {/* )} */}
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                justifyContent: "space-between",
                backgroundColor: "var(--bg)",
              },
            }}
          >
            {drawer}
            {/* <Footer /> */}
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
