import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';

export default function Tasks() {
  return (
    <>
      <Typography component="h1" variant="h1" style={{ padding: '100px' }}>
        Tasks page
      </Typography>
      <Link to="task-form">Додай покупку</Link>
    </>
  );
}
