import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, ButtonGroup, Nav, Navbar } from "react-bootstrap";
import ColorWheel from "../ColorWheel/ColorWheel";
import i18n from "../../i18n";
import "./Navigation.scss";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand data-testid="home-link" onClick={() => history.push("/")}>
        <h5 className="chromatacia-brand">
          <ColorWheel /> Chromatacia
        </h5>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link onClick={() => history.push("/bookshelf")}>
          {t("bookshelf")}
        </Nav.Link>
        <Nav.Link onClick={() => history.push("/gallery")}>
          {t("gallery")}
        </Nav.Link>
        <Nav.Link onClick={() => history.push("/about")}>{t("about")}</Nav.Link>
        <ButtonGroup>
          <Button variant="secondary" onClick={() => changeLanguage("de")}>
            de
          </Button>
          <Button variant="secondary" onClick={() => changeLanguage("sv")}>
            sv
          </Button>
          <Button variant="secondary" onClick={() => changeLanguage("en")}>
            en
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
