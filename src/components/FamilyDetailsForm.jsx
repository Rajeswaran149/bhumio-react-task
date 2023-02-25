import React from 'react'
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material'
import { useAddFamily, initialFamilyInfoState } from '../utils';

const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const FamilyDetailsForm = ({handleClose = () => {}}) => {

  const {familyInfo, setFamilyInfoState, addFamily, onPicUpload} = useAddFamily({initialFamilyInfoState, afterAdding: handleClose})

  return (
    <Box sx={style}>
        <form 
            onSubmit={addFamily}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }} 
        >
            {Object.keys(initialFamilyInfoState).map((fieldKey, i) => fieldKey !== "Family Photo" && <TextField required name={fieldKey} variant='outlined' label={fieldKey}  onChange={setFamilyInfoState} />)}
            <Button variant="contained" component="label" sx={{textTransform : 'capitalize'}} >
              Upload Pictures
              <input
                  type='file'
                  onChange={onPicUpload}
                  hidden
                  multiple
                  accept="image/*"
              />
            </Button>
            <div>
              {familyInfo["Family Photo"] && familyInfo["Family Photo"].map(src => <img style={{padding : '5px'}} src={src} alt='family' key={src} width = {100} />)}
            </div>
            <div style={{textAlign : 'center'}} >
              <Button variant="contained" type='submit'>Add</Button>
            </div>
        </form>
    </Box>
  )
}
