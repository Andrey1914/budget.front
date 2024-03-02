import RegisterForm from 'components/Forms/RegisterForm';
import { Typography } from '@mui/material';

export default function Register() {
  return (
    <div>
      <Typography component="h1" variant="h1" sx={{ textAlign: 'center' }}>
        Registration
      </Typography>

      <RegisterForm />
    </div>
  );
}
