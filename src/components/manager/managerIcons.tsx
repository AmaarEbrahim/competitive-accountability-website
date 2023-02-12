import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';



export default function ManagerIcons() {
  return (
    
    <Stack direction="row" alignItems="center" spacing={2}>
    <Button onClick={() => {
        alert('clicked');
      }}  variant = "outlined" >
        Edit Rules
    </Button>

    <Button onClick={() => {
        alert('clicked');
      }}  variant = "outlined" startIcon = {<AddBoxIcon />} >
        Add Task
    </Button>

    <Button onClick={() => {
        alert('clicked');
      }}  variant = "outlined" startIcon = {<PersonAddIcon />} >
        Add People
    </Button>


    </Stack>

    







    


      
     

  );
}
