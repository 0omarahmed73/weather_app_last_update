import { Col, Row } from "react-bootstrap";
import { WeatherContext } from "../contexts/WeatherContext";
import { useContext } from "react";
import img1 from "../assets/real-feel-hot-COQRE7Gd.png";
export function SectionOnTheRight() {
  const { weather, error } = useContext(WeatherContext);
  const { languages } = useContext(WeatherContext);
  return (
    <div className="secOnTheRigth ">
      <Row className="cardContainer justify-content-center d-flex">
        <Col xs={11} sm={5} lg={3} className="heat p-4 my-3 mx-2">
          {error ? (
            <p>{languages["No city found!"]}</p>
          ) : (
            <>
              <div className="text d-flex justify-content-center my-2">
                <h1 className="title-text">{languages["Feels Like"]}</h1>
              </div>
              <div className="img d-flex justify-content-center my-2">
                {" "}
                <img src={img1} width={50} />
              </div>
              <div className="quantity d-flex justify-content-center mt-3">
                <h1 className="fs-5">{weather["current"]["feelslike_c"]} °</h1>
              </div>
            </>
          )}
        </Col>
        <Col xs={11} sm={5} lg={3} className="windSpeed p-4 my-3 mx-2">
          {error ? (
            <p>{languages["No city found!"]}</p>
          ) : (
            <>
              {" "}
              <div className="text d-flex justify-content-center my-2">
                <h1 className="title-text">{languages["Wind Speed"]}</h1>
              </div>
              <div className="img d-flex justify-content-center my-2">
                {" "}
                <img
                  src="https://weather-webapp-ashy.vercel.app/assets/wind-speed-BZUvZSCM.png"
                  width={60}
                />
              </div>
              <div className="quantity d-flex justify-content-center mt-3">
                <h1 className="fs-5">
                  {weather["current"]["wind_kph"]} {languages.kph}
                </h1>
              </div>
            </>
          )}
        </Col>
        <Col xs={11} sm={10} lg={3} className="Humidity p-4 my-3 mx-2">
          {error ? (
            <p>{languages["No city found!"]}</p>
          ) : (
            <>
              {" "}
              <div className="text d-flex justify-content-center my-2">
                <h1 className="title-text">{languages["Humidity"]}</h1>
              </div>
              <div className="img d-flex justify-content-center my-2">
                {" "}
                <img
                  src="https://weather-webapp-ashy.vercel.app/assets/humidity-BFMyhXsb.png"
                  width={60}
                />
              </div>
              <div className="quantity d-flex justify-content-center mt-3">
                <h1 className="fs-5">{weather["current"]["humidity"]}%</h1>
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}
