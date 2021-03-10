import React, { useEffect, useState } from "react";
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
  const options = ["de", "sv", "en"];
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

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
          {options.map((option: string, index: number) => {
            return (
              <Button
                active={language === option}
                variant="secondary"
                onClick={() => setLanguage(option)}
                key={index}
              >
                {option}
              </Button>
            );
          })}
        </ButtonGroup>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
