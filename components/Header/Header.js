import React, { useContext, useState } from "react";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import styles from "./header.module.css";
import UserContext from "../../contexts/UserContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
  Dropdown,
  Container,
} from "reactstrap";

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  const onLogOut = () => {
    logOut();
    document.querySelector("#home-logo").click();
  };

  return (
    <header className="mb-4">
      <Navbar color="white" light expand="lg">
        <Container fluid="xl">
          <Link href="/">
            <a className="navbar-brand" id="home-logo">
              CalidBurn
            </a>
          </Link>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={show} navbar className={styles.collapse}>
            <Nav navbar>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink href="/">
                    <a className="nav-link">Home</a>
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li className="nav-item">
                      <NavLink href="/mis-productos">
                        <a className="nav-link">Mis productos</a>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink href="/mis-compras">
                        <a className="nav-link">Mis compras</a>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </Nav>
            <div>
              {!user ? (
                <>
                  <Link href="/registrarse">
                    <a className={`mx-2 btn btn-outline-primary`}>
                      Registrarse
                    </a>
                  </Link>

                  <Link href="/iniciar-sesion">
                    <a className={`btn btn-primary`}>Iniciar sesion</a>
                  </Link>
                </>
              ) : (
                <>
                  <span className={styles.email}>{user.email}</span>
                  <button
                    type="button"
                    className="mx-2 btn btn-primary"
                    onClick={onLogOut}
                  >
                    Cerrar sesion
                  </button>
                </>
              )}
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
