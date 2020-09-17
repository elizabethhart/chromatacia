import React from "react";
import { render } from "@testing-library/react";
import ItemCarousel from "./ItemCarousel";

test("renders component headline", () => {
  const { getByText } = render(
    <ItemCarousel items={[]} itemHeadline={"Headline"} isLoading={false} />
  );
  const headline = getByText("Headline");
  expect(headline).toBeInTheDocument();
});
