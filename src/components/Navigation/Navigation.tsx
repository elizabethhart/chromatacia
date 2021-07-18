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
  const languageOptions = ["de", "sv", "en"];
  const navOptions = [
    {
      title: t("bookshelf"),
      route: "/bookshelf",
    },
    {
      title: t("gallery"),
      route: "/gallery",
    },
    {
      title: t("about"),
      route: "/about",
    },
  ];
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
        {navOptions.map((navOption) => {
          return (
            <Nav.Link onClick={() => history.push(navOption.route)}>
              {navOption.title}
            </Nav.Link>
          );
        })}
        <ButtonGroup>
          {languageOptions.map((option: string, index: number) => {
            return (
              <Button
                active={language === option}
                variant="secondary"
                onClick={() => setLanguage(option)}
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
