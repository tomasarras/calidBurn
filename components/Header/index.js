import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef, useContext } from "react";
import { Container, Dropdown, Navbar } from "react-bootstrap";
import Search from "../Search";
import styles from "./Header.module.css";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import ButtonMetamask from "../Buttons/Metamask";
import UserContext from "../../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <span
      role="button"
      className="cursor-pointer d-flex"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <div className="ms-1 justify-content-center align-items-center">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </span>
  ));

  CustomToggle.displayName = "CustomToggle";
  
  const CustomMenu = forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {children}
          </ul>
        </div>
      );
    }
  );

  CustomMenu.displayName = "CustomMenu";

  const NavItem = ({ title, href = "#" }) => (
    <div className="ms-2">
      <Link legacyBehavior href={href}><a className="text-white-hover">{title}</a></Link>
    </div>
  );

  return (
    <>
      <Navbar className="bg-transparent">
        <Container>
          <div className="d-flex w-100 text-white">
            <Navbar.Brand href="/">
              <img
                alt="logo"
                src="/Logo_calidBurn.png"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

            <div className="d-flex w-100 flex-column ms-4">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <div className="w-75">
                  <Search />
                </div>
                <ButtonMetamask
                  className={`${styles.walletBtn} me-4`}
                  connectLabel="Conectar billetera"
                  disconnectLabel="Desconectar billetera"
                />
              </div>

              <div className="mt-3 d-flex justify-content-between w-100">
                <div className="d-flex">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      Categorías
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                      <Dropdown.Item href="#">Casas</Dropdown.Item>
                      <Dropdown.Item href="#">Autos</Dropdown.Item>
                      <Dropdown.Item href="#">Motos</Dropdown.Item>
                      <Dropdown.Item href="#">Otros</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <NavItem title="La tokenizacion"/>
                  {user &&
                    <NavItem title="Vender" href="/vender-aviso"/>
                  }
                </div>
                
                <div className="d-flex">
                  {user ? <span role="button" className="cursor-pointer" onClick={logOut}>Cerrar sesion</span>
                    : <>
                      <NavItem title="Creá tu cuenta" href="/registrarse"/>
                      <NavItem title="Ingresá" href="/iniciar-sesion"/>
                    </>}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
