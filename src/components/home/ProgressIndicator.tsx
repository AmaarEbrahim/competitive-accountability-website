import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import React from "react";

type ProgressIndicatorProps = {
  initialPercentage: number;
};

const ProgressIndicator = (props: ProgressIndicatorProps) => {
  return (
    <Box flex={1}>
      <Typography variant={"caption"}>Progress</Typography>
      <LinearProgress variant="determinate" value={props.initialPercentage} />
    </Box>
  );
};

export default ProgressIndicator;
