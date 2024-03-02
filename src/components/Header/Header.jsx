import * as React from 'react';

// import { useAuth } from '../../hooks/useAuth';
// import PropTypes from "prop-types";

// import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

import {
  Box,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

// import AuthNav from 'components/AuthNav/AuthNav';

// import UserMenu from 'components/UserMenu/UserMenu';

import {
  NavigationList,
  NavigationLink,
  DrowerItem,
  Title,
} from 'components/Header/HeaderStyled';

// import { refreshUser } from '../../redux/auth/operations';

const drawerWidth = 240;

export default function Header(props) {
  // const { isLoggedIn } = useAuth();
  // console.log(isLoggedIn);

  // const { data } = refreshUser();
  // console.log(data);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        // background: "linear-gradient(180deg, #4fbaf4 0%, #4af2ec 100%)",
      }}
    >
      <Title
        variant="h6"
        sx={{
          py: 2,
          color: 'var(--text)',
          background: 'linear-gradient(180deg, #4fbaf4 0%, #4af2ec 100%)',
        }}
      >
        Бюджет
      </Title>
      <Divider sx={{ borderColor: 'var(--border-color)' }} />
      {/* <UserMenu data={data} /> */}
      {/* {isLoggedIn ? ( */}

      <>
        {/* <UserMenu data={data} /> */}
        <NavigationList>
          <NavigationLink to="/">
            <DrowerItem>Консоль</DrowerItem>
          </NavigationLink>

          <NavigationLink to="income">
            <DrowerItem>Дохід</DrowerItem>
          </NavigationLink>

          <NavigationLink to="expenses">
            <DrowerItem>Видаток</DrowerItem>
          </NavigationLink>

          <NavigationLink to="tasks">
            <DrowerItem>Потрібно купити</DrowerItem>
          </NavigationLink>

          <NavigationLink to="all-transactions">
            <DrowerItem>Історія</DrowerItem>
          </NavigationLink>
        </NavigationList>
      </>
      {/* ) : ( */}
      {/* <AuthNav /> */}
      {/* )} */}

      {/* <ThemeSwitch /> */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="header">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            padding: '0.7rem 0',
            // background: 'linear-gradient(to left, #4fbaf4 0%, #4af2ec 100%)',
            background: '#4fbaf4',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: 'none' },
                color: 'var(--text)',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Title variant="h6">Бюджет</Title>

            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              {/* <ThemeSwitch /> */}

              {/* {isLoggedIn ? ( */}
              <>
                {/* <UserMenu data={data} /> */}
                <NavigationList>
                  <li>
                    <NavigationLink to="/" exact="true">
                      Консоль
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink to="income" exact="true">
                      Дохід
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink to="expenses" exact="true">
                      Видаток
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink to="tasks" exact="true">
                      Потрібно купити
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink to="all-transactions" exact="true">
                      Історія
                    </NavigationLink>
                  </li>
                </NavigationList>
              </>
              {/* ) : ( */}
              {/* <AuthNav /> */}
              {/* )} */}
            </Box>
          </Toolbar>
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
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg)',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}

// Header.propTypes = {
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
// window: PropTypes.func,
// };
