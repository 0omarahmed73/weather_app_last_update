import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { Col, Row } from "react-bootstrap";

export function Section2() {
  const {citiesList , weathers , languages} = useContext(WeatherContext);
  return (
    <div className="px-lg-5">
      <div className="section2 mt-5">
        <div className="text p-3">
          <h1 className="fs-5 mb-2">{languages['Other Large Cities']}</h1>
        </div>
        <Row className="info w-100 d-flex  pb-4">
          <Col className="city1">
            <div className="img d-flex justify-content-center">
              <img src={weathers[0].image} width={50} />
            </div>
            <div className="quantity d-flex justify-content-center">
              <h1 className="fs-3">{weathers[0].weather}°</h1>
            </div>
            <div className="city d-flex justify-content-center">{citiesList[0]}</div>
          </Col>
          <Col className="city2">
            <div className="img d-flex justify-content-center">
              <img src={weathers[1].image} width={50} />
            </div>
            <div className="quantity d-flex justify-content-center">
              <h1 className="fs-3">{weathers[1].weather}°</h1>
            </div>
            <div className="city d-flex justify-content-center">{citiesList[1]}</div>
          </Col>
          <Col className="city3">
            <div className="img d-flex justify-content-center">
              <img src={weathers[2].image} width={50} />
            </div>
            <div className="quantity d-flex justify-content-center">
              <h1 className="fs-3">{weathers[2].weather}°</h1>
            </div>
            <div className="city d-flex justify-content-center">{citiesList[2]}</div>
          </Col>
          <Col className="city4">
            <div className="img d-flex justify-content-center">
              <img src={weathers[3].image} width={50} />
            </div>
            <div className="quantity d-flex justify-content-center ">
              <h1 className="fs-3">{weathers[3].weather}°</h1>
            </div>
            <div className="city d-flex justify-content-center">{citiesList[3]}</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
