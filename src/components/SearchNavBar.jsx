import { Col, Form, Row } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { WeatherContext } from "../contexts/WeatherContext";
import { useContext, useState } from "react";

export function SearchNavBar({ col = 7, colInput = 8, colIcon = 1 }) {
  const { searchForCity , languages } = useContext(WeatherContext);
  const [searchText, setSearchText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    searchForCity(searchText);
  }
  return (
    <Col xs={col} className="d-flex justify-content-start align-items-center">
      <Form onSubmit={handleSubmit} className="form-choose-city w-100">
        <Row className="gap-2 w-100 d-flex justify-content-center">
          <Col xs={colInput}>
            <Form.Control
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder={languages['city']}
            ></Form.Control>
          </Col>
          <Col xs={colIcon}>
            <button
              type="submit"
              className="form-control d-flex justify-content-center align-items-center m-0 p-0"
            >
              <IoIosSearch />
            </button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}
