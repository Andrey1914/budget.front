// import { NavigationLink } from 'components/Navigation/NavigationStyled';
import { NavigationList, NavigationLink } from 'components/Header/HeaderStyled';

import Box from '@mui/material/Box';

export default function AuthNav() {
  return (
    <Box display="flex" flexDirection="row" gap="16px">
      <NavigationList>
        <NavigationLink to="/register">Registration</NavigationLink>
        <NavigationLink to="/login">Login</NavigationLink>
      </NavigationList>
    </Box>
  );
}
