import CountdownTimer from "./CountdownTimer";

const Timing = (props) => {
  const THREE_DAYS_IN_MS = props.duree*60* 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return <CountdownTimer targetDate={dateTimeAfterThreeDays} />;
};


export default Timing;
