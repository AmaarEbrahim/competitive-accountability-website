import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';

export default function IconButtons() {
  return (
    

    <Button onClick={() => {
        alert('clicked');
      }}  variant = "outlined" startIcon = {<AddBoxIcon />} >
        Create Event
    </Button>

    
      
     

  );
}
