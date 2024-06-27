import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import useLocalStorage from "use-local-storage";
import { WeatherContext } from "../contexts/WeatherContext";
import { formatTime } from "../services/format_time";

export function DateTheme({ col = 2 }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { weather, error } = useContext(WeatherContext);
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (weather && !error) {
      setDate(new Date(weather.location.localtime_epoch * 1000));
    } else if (error) {
      setDate(new Date());
    }
  }, [error, weather]);

  useEffect(() => {
    if (error) {
      console.log(date);
    }
  }, [date, error]);

  return (
    <Col xs={col} className="date-theme">
      <div className="date-time">
        <p>
          {weather && !error
            ? weather.location.localtime.split(" ")[0]
            : date.toLocaleDateString()}
        </p>
        <p>{weather && !error ? formatTime(date) : formatTime(new Date())}</p>
      </div>
      <label className="switch">
        <input
          onClick={handleThemeToggle}
          type="checkbox"
          checked={theme === "dark"}
          readOnly
        />
        <span className="slider" />
      </label>
    </Col>
  );
}
