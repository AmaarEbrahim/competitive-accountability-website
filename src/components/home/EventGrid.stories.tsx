import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import { ThemeOptions } from "@mui/system";
import { EventData } from "../../modules/EventData";
import EventGrid from "./EventGrid";

const createNEventDatas = (n: number): EventData[] => {
  const v = new Array<EventData>();
  for (let i = 0; i < n; i++) {
    v.push({
      titleText: "Event " + i,
      description: "Blah blah blah",
      progressPercentage: 0,
    });
  }
  return v;
};

export const Primary = () => {
  return <EventGrid events={createNEventDatas(5)} />;
};

const themeOptions = createTheme({
  palette: {
    secondary: {
      main: "#f50057",
    },
  },
});

export const Secondary = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <Button sx={{ bgcolor: "secondary.main" }}>Hi</Button>
    </ThemeProvider>
  );
};

export default {
  title: "EventGrid",
  component: Primary(),
};
