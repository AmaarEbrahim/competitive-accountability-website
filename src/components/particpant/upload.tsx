import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function PhotoUpload() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button
        onClick={() => {
          alert("clicked");
        }}
        variant="outlined"
        startIcon={<AddAPhotoIcon />}
      >
        Upload Photos
      </Button>
    </Stack>
  );
}
