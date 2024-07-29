import RbsNav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nav() {
  return (
          <RbsNav className="me-auto">
            <RbsNav.Link href="/">Home</RbsNav.Link>
            <RbsNav.Link href="#link">About</RbsNav.Link>
            <RbsNav.Link href="#link">Menu</RbsNav.Link>
            <RbsNav.Link href="/reservations">Reservations</RbsNav.Link>
            <RbsNav.Link href="#link">Orders Online</RbsNav.Link>
            <RbsNav.Link href="#link">Login</RbsNav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </RbsNav>
  );
}

export default Nav;