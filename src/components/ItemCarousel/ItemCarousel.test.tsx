import React from "react";
import { render, screen } from "@testing-library/react";
import ItemCarousel from "./ItemCarousel";

test("renders component headline", () => {
  render(<ItemCarousel items={[]} itemHeadline={"Headline"} />);
  expect(screen.getByText("Headline")).toBeInTheDocument();
});
