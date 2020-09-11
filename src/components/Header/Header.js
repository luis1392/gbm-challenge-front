import React, { useState, useEffect, useCallback } from "react";
import isLoggedIn from "../../utils/isLoggedIn";

import { authenticationService } from "../../utils/authentication";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [isLog, setIsLog] = useState();
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async () => {
    const user = await authenticationService.currentUserValue;
    const isLog = await isLoggedIn();
    setIsLog(isLog);
    setUser(user);
    setLoading(false);
  }, []);

  useEffect(() => {
    // 1.0 Controller
    const controller = new AbortController();

    // 2.0 Set user.
    loadUser();

    return () => {
      controller.abort();
    };
  }, [loadUser]);

  if (loading) {
    return null;
  }

  const handlerCloseSession = async () => {
    await authenticationService.logout(user.token);
    window.location.href = "/";
  };

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        {isLog && <NavbarBrand href="/private">GBM</NavbarBrand>}
        {!isLog && <NavbarBrand href="/">GBM</NavbarBrand>}

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {isLog && (
              <NavItem>
                <NavLink to="/precios-y-cotizaciones" className="nav-link">
                  IPC
                </NavLink>
              </NavItem>
            )}
            {!isLog && (
              <NavItem>
                <NavLink
                  to="/precios-y-cotizaciones-publico"
                  className="nav-link"
                >
                  IPC
                </NavLink>
              </NavItem>
            )}
            {!isLog && (
              <NavItem>
                <NavLink to="/registro" className="nav-link">
                  Registro
                </NavLink>
              </NavItem>
            )}
          </Nav>
          <NavbarText>
            {isLog ? (
              <div onClick={handlerCloseSession} className="nav-link div-link">
                Cerrar sesión
              </div>
            ) : (
              <NavLink to="/login" className="nav-link">
                Iniciar sesión
              </NavLink>
            )}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
