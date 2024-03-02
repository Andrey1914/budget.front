import LoginForm from 'components/Forms/LoginForm';
import { Typography } from '@mui/material';

export default function Login() {
  return (
    <div>
      <Typography component="h1" variant="h1" sx={{ textAlign: 'center' }}>
        Login
      </Typography>

      <LoginForm />
    </div>
  );
}
