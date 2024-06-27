import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { Col, Row } from "react-bootstrap";
import { useWindowSize } from "@uidotdev/usehooks";

export function SectionOnTheLeft() {
  const { weather, error } = useContext(WeatherContext);
  const size = useWindowSize();
  return (
    <div className="secOnTheLeft align-items-center d-flex justify-content-center">
      <Row className="d-flex flex-row justify-content-center align-items-center">
        {" "}
        <Col xs={9} sm={9} lg={8} className="text">
          <h1 className="main-text">
            {error
              ? "Requested city not found in this country!"
              : weather["current"]["temp_c"]}{" "}
            {error ? "" : "°C"}
          </h1>
          <h1 className="state">
            {error ? "" : weather.current.condition.text}
          </h1>
        </Col>
        {
          <Col xs={3} sm={2} lg={3} className="img">
            <img
              src={
                !error
                  ? weather.current.condition.icon
                  : "https://weather-webapp-ashy.vercel.app/assets/not-found-VMvTkKZT.png"
              }
              width={size.width < 768 && size.width >= 440 ? 80 : size.width < 440 ? 60 : 100}
            />
          </Col>
        }
      </Row>
    </div>
  );
}
