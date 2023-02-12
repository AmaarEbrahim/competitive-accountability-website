import {
  Box,
  CardContent,
  List,
  ListItem,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import Card from "@mui/material/Card";
import { EventData } from "../../modules/EventData";
import ProgressIndicator from "./ProgressIndicator";

export type EventBoxProps = {
  data: EventData;
  onClickCallback: () => void;
};

const cardWidth = 300;
const cardHeight = 300;

const EventBox = (props: EventBoxProps) => {
  return (
    <Box>
      <Card>
        <List>
          <ListItem>
            <Typography variant="h5">{props.data.titleText}</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">{props.data.description}</Typography>
          </ListItem>
        </List>
        <List sx={{ marginTop: `auto` }}>
          {/* <CardContent sx={{ marginTop: `auto` }}> */}
          <ListItem>
            <ProgressIndicator initialPercentage={30} />
          </ListItem>
          <ListItem>
            <Button>See More</Button>
          </ListItem>
          {/* </CardContent> */}
        </List>
      </Card>
    </Box>
  );
};

export default EventBox;
