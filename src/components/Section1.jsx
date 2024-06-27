import { Col, Row } from "react-bootstrap";
import { SectionOnTheLeft } from "./SectionOnTheLeft";
import { SectionOnTheRight } from "./SectionOnTheRight";
export function Section1() {
  return (
    <div className="section1 d-flex justify-content-between">
      <SectionOnTheLeft />
      <SectionOnTheRight />
    </div>
  );
}
