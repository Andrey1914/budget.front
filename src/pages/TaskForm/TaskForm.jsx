import React, { useState } from 'react';

import { useGlobalContext } from 'context/globalContext';

import { plus } from 'utils/icons';

import {
  Container,
  TextField,
  // InputLabel,
  // Select,
  // MenuItem,
  // FormControl,
  Fab,
  // Checkbox,
} from '@mui/material';

import { FormStyled } from 'components/Forms/FormStyled';

import { theme } from 'styles/theme.js';

export default function TaskForm() {
  const { addTask, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    task: '',
    completed: false,
  });

  const {
    task,
    // completed
  } = inputState;

  const handleInput = (task) => (e) => {
    setInputState({ ...inputState, [task]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputState);
    setInputState({
      task: '',
      completed: false,
    });
  };
  // const [currentTask, setCurrentTask] = useState('');

  // const handleChange = ({ currentTarget: input }) => {
  //   setCurrentTask(input.value);
  // };
  return (
    <Container maxWidth="sm" style={{ paddingTop: theme.spacing(4) }}>
      <FormStyled
        onSubmit={handleSubmit}
        style={{ margin: '0 auto', flexDirection: 'row', width: '100%' }}
      >
        {error && <p>error</p>}
        <TextField
          id="outlined-basic"
          label="Що потрібно зробити..."
          variant="outlined"
          value={task}
          name={'task'}
          fullWidth
          onChange={handleInput('task')}
        />
        {/* <Checkbox /> */}
        <div className="submit-btn" style={{ marginLeft: 'auto' }}>
          <Fab
            icon={plus}
            color="secondary"
            aria-label="add"
            onClick={handleSubmit}
          >
            {plus}
          </Fab>
        </div>
      </FormStyled>
    </Container>
  );
}
