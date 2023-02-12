import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField id="Event Name" label="EventName" variant="outlined"/>
        <TextField id="Event Name" label="Number of Events" variant="outlined"/>
        <TextField
          id="outlined-multiline-static"
          label="Rules"
          multiline
          rows={4}
        />
        </div>

       
     
      

    </Box>
  );
}

