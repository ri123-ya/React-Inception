import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load 2 input boxes on contact us component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");
    //Assertion
    expect(input.length).toBe(2);
  });

  test("Should load placeholder name on contact us component", () => {
    render(<Contact />);

    const placeholder = screen.getByPlaceholderText("name");
    //Assertion
    expect(placeholder).toBeInTheDocument();
  });
});
