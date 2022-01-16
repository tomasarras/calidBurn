import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef } from "react";
import { Container, Dropdown, Navbar } from "react-bootstrap";
import Search from "../Search";
import styles from "./Header.module.css";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

const Header = () => {
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
      <Link href={href}><a className="text-white-hover">{title}</a></Link>
    </div>
  );

  return (
    <>
      <Navbar className="bg-transparent">
        <Container>
          <div className="d-flex w-100 text-white">
            <Navbar.Brand href="#home">
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
                <button className={`${styles.walletBtn} me-4`}>
                  Conectar billetera
                </button>
              </div>

              <div className="mt-3 d-flex justify-content-between w-100">
                <div className="d-flex">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      Categorías
                    </Dropdown.Toggle>

                    {/* <Dropdown.Menu as={CustomMenu}>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                        Something else
                        </Dropdown.Item>
                      </Dropdown.Menu> */}
                  </Dropdown>

                  <NavItem title="La tokenizacion"/>
                  <NavItem title="Vender"/>
                </div>
                
                <div className="d-flex">
                  <NavItem title="Creá tu cuenta"/>
                  <NavItem title="Ingresá"/>
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
