import { useEffect, useState } from "react";
import "./App.css";

export default function AppHeader() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const [cday, setDay] = useState(time);

  function updateDay() {
    let day = new Date().toLocaleDateString("en-us", { weekday: "long" });
    return setDay(day);
  }

  function UpdateTime() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  useEffect(() => {
    updateDay();
  }, []);

  setInterval(UpdateTime, 1000);

  return (
    <>
      <p className="day"> {cday}</p>
      <h1 className="time">{ctime}</h1>
    </>
  );
}
