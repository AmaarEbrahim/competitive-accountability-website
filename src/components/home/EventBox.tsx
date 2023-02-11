import { Box, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { EventData } from "../../modules/EventData";

export type EventBoxProps = {
  data: EventData;
  onClickCallback: () => void;
};

const cardWidth = 300;
const cardHeight = 300;

const EventBox = (props: EventBoxProps) => {
  return (
    <Box
    //   sx={{
    //     minWidth: cardWidth,
    //     minHeight: cardHeight,
    //     // width: cardWidth,
    //     // height: cardHeight,
    //   }}
    >
      <Card
        variant={"outlined"}
        sx={{
          minWidth: cardWidth,
          minHeight: cardHeight,
          //   width: cardWidth,
          //   height: cardHeight,
        }}
      >
        <CardContent>
          <Typography>{props.data.titleText}</Typography>
          <Typography>{props.data.description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EventBox;
