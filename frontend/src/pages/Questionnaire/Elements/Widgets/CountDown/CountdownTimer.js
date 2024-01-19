import React, { Fragment } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../../../../../helpers/Hooks/useCountDown";
import styled from "styled-components";

import { RiTimerFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  NOTIFY_ERROR,
  NOTIFY_WARNING,
} from "../../../../../store/actions/types";

const ExpiredNotice = () => {
  return (
    <ExpiredContainer>
      <Expired>Le temps est terminé</Expired>
    </ExpiredContainer>
  );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
  const Dispatch = useDispatch();

  let Danger = "G";

  if (hours === 0 && minutes < 20 && minutes >= 5) {
    Danger = "Y";
    if (minutes === 19 && seconds === 59) {
      Dispatch({
        type: NOTIFY_WARNING,
        payload: {
          message: "Il vous reste que 20 minutes",
        },
      });
    }
  } else if (hours === 0 && minutes < 5) {
    Danger = "R";
    if (minutes === 4 && seconds === 59) {
      Dispatch({
        type: NOTIFY_ERROR,
        payload: {
          message: "Il vous reste que 5 minutes",
        },
      });
    }
  }

  return (
    <Fragment>
      <TimerIcon isdanger={Danger} />
      <Container isDanger={Danger}>
        {hours > 0 && (
          <Fragment>
            <DateTimeDisplay value={hours} />
            <p>:</p>
          </Fragment>
        )}
        {minutes > 0 && (
          <Fragment>
            <DateTimeDisplay value={minutes} />
            <p>:</p>
          </Fragment>
        )}
        {hours === 0 && minutes === 0 ? (
          <Fragment>
            <DateTimeDisplay value={seconds} />
            <p>s</p>
          </Fragment>
        ) : (
          <DateTimeDisplay value={seconds} />
        )}
      </Container>
    </Fragment>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

// styled items

const TimerIcon = styled(RiTimerFill)`
  font-size: 1.5rem;
  margin-bottom: 3px;
  color: ${(props) => {
    if (props.isdanger === "G") return props.theme.colors.primary;
    else if (props.isdanger === "Y") return props.theme.colors.warning;
    else return props.theme.colors.error;
  }};
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: ${(props) => {
    if (props.isDanger === "G") return props.theme.colors.primary;
    else if (props.isDanger === "Y") return props.theme.colors.warning;
    else return props.theme.colors.error;
  }};
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const ExpiredContainer = styled.div`
  display: flex;
  margin-bottom: 0.4rem;
`;

const Expired = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.error};
`;

export default CountdownTimer;
