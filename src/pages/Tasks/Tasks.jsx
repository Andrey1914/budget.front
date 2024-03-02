import { useEffect } from 'react';

import TaskForm from 'pages/TaskForm/TaskForm';

import { useGlobalContext } from 'context/globalContext';

import TaskItem from 'components/TaskItem/TaskItem';

import { Container, Typography } from '@mui/material';

import { theme } from 'styles/theme.js';

export default function Tasks() {
  const { tasks, getTasks, deleteTask } = useGlobalContext();

  useEffect(() => {
    getTasks();
  }, [getTasks]);
  console.log(tasks);
  // console.log(typeof tasks);

  const tasksArray = Object.values(tasks);

  return (
    <Container maxWidth="sm" style={{ paddingTop: theme.spacing(4) }}>
      <Typography component="h1" variant="h1" style={{ textAlign: 'center' }}>
        Записник.
      </Typography>

      <TaskForm />

      <Container
        component="ul"
        maxWidth="sm"
        style={{ paddingTop: theme.spacing(4) }}
      >
        {tasksArray.map(({ _id, task }) => (
          <TaskItem key={_id} id={_id} task={task} deleteItem={deleteTask} />
        ))}
      </Container>
    </Container>
  );
}
