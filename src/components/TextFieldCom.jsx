import React from 'react'
import { useDispatch } from 'react-redux';

import { FormControl, TextField, Box } from '@mui/material';

import { changeAmount } from '../redux/questionsSlice';

function TextFieldCom() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeAmount(event.target.value))
  }

  return (
    <Box mt={3}>
      <FormControl fullWidth size="small">
        <TextField 
          label="Amount of Questions" 
          variant="outlined"
          type="number" 
          size="small"
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  )
}

export default TextFieldCom