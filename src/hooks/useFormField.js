import { useState } from 'react';

export default function useFormFields(initialValue) {
  const [state, setState] = useState(initialValue);

  const handleChange = ({ target: { value } }) => {
    setState(value);
  };

  return { state, setState, handleChange };
}
