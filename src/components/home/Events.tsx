
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
        <div>
        <TextField id="Event Name" label="EventName" variant="outlined"/>
        

        <TextField id="Event Name" label="Number of Tasks" variant="outlined"/>

        </div>

    <div>
    <TextField
          id="outlined-multiline-static"
          label="Task 1"
          multiline
          rows={4}
        /> 

    <TextField
          id="outlined-multiline-static"
          label="Task 2"
          multiline
          rows={4}
        /> 
    
    <TextField
          id="outlined-multiline-static"
          label="Task 3"
          multiline
          rows={4}
        /> 
    </div>

    

    <div>
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

