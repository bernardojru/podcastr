import { useEffect, useState } from "react";
import { CountdownContainer, Counter } from "./styles";

export function Countdown() {
  const [day, setDay] = useState<number>();
  const [hour, setHour] = useState<number>();
  const [minute, setMinute] = useState<number>();
  const [second, setSecond] = useState<number>();

  function handleCounter() {
    const date = "April 4, 2023 00:00:00";
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();

    const interval = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(interval / day);
    const hourNumber = Math.floor((interval % day) / hour);
    const minuteNumber = Math.floor((interval % hour) / minute);
    const secondNumber = Math.floor((interval % minute) / second);

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minuteNumber);
    setSecond(secondNumber);
  }

  useEffect(() => {
    setInterval(() => {
      //   handleCounter();
    }, 1000);
  }, []);

  return (
    <CountdownContainer>
      <Counter>{day} dias</Counter>
      <Counter>{hour} horas</Counter>
      <Counter>{minute} minutos</Counter>
      <Counter>{second} segundos</Counter>
    </CountdownContainer>
  );
}
