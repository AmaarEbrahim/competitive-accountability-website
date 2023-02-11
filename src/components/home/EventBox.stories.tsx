import EventBox, { EventBoxProps } from "./EventBox";

const props: EventBoxProps = {
  data: {
    titleText: "Getting up at 5 AM",
    description: "We're all getting up at 5 AM for the next 30 days!",
    progressPercentage: 0,
  },
  onClickCallback: function (): void {
    throw new Error("Function not implemented.");
  },
};

export const Primary = () => <EventBox {...props} />;

export default {
  title: "EventBox",
  component: Primary(),
};
