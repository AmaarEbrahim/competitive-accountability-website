import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';



export default function IconStuff() {
  return (
    
    <Stack direction="row" alignItems="center" spacing={2}>
    <Button onClick={() => {
        alert('clicked');
      }}  variant = "outlined" startIcon = {<AddBoxIcon />} >
        Create Event
    </Button>

    <Button onClick={() => {
        alert('clicked');
      }}  variant = "outlined" startIcon = {<CircleNotificationsIcon />} >
        Notifcations
    </Button>


    </Stack>

    







    


      
     

  );
}
