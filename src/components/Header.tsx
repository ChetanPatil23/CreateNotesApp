import * as React from "react";
import {Navbar,Container} from "react-bootstrap"

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>React Typescript Notes Creator</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
