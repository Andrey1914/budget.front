import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operations';

import { useAuth } from '../../hooks/useAuth';

import { Box, Button } from '@mui/material';

// import Button from 'components/Button/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Box component="p" sx={{ m: 0 }} color="#fff">
        Welcome, {user.name}
      </Box>
      <Button
        type="button"
        variant="outlined"
        // sx={{ p: 1 }}
        onClick={() => dispatch(logOut())}
      >
        Exit
      </Button>
    </Box>
  );
}
