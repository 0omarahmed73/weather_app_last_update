import { Container, Row } from "react-bootstrap";
import { LocationName } from "./LocationName";
import { SearchNavBar } from "./SearchNavBar";
import { DateTheme } from "./DateTheme";
import { useWindowSize } from "@uidotdev/usehooks";

export function NavBar() {
  const size = useWindowSize();
  if (size.width < 992) {
    return (
      <Container fluid={true} className="navbar-custom">
        <Row className="d-flex px-3 flex-row justify-content-center w-100">
          <LocationName col={6}/>
          <DateTheme col={6}/>
        </Row>
        <Row className="d-flex mt-2 flex-row justify-content-center w-100">
          <SearchNavBar col={12} colInput={10}/>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid={true} className="navbar-custom">
        <Row className="d-flex flex-row justify-content-center w-100">
          <LocationName />
          <SearchNavBar />
          <DateTheme />
        </Row>
      </Container>
    );
  }
}
