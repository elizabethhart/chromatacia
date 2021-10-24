import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders component headline", () => {
  render(<Home />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
