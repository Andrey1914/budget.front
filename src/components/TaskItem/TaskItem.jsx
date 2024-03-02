import React from 'react';

import { dateFormat } from 'utils/dateFormat';

import { trash } from 'utils/icons';

import { Fab, Typography } from '@mui/material';

import { TaskCard } from 'components/TaskItem/TaskItemStyled';

// import { useEffect } from 'react';

// import { CheckBox } from '@mui/icons-material';
// import { useGlobalContext } from 'context/globalContext';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function TaskItem({ id, task, deleteItem, date }) {
  return (
    <>
      <TaskCard>
        {/* <CheckBox {...label} defaultChecked /> */}
        <Typography component="p" variant="p">
          {task}
        </Typography>
        <p>{dateFormat(date)}</p>

        <Fab
          color="secondary"
          aria-label="delete"
          onClick={() => deleteItem(id)}
        >
          {trash}
        </Fab>
      </TaskCard>
    </>
  );
}
