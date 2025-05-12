import { render, screen } from "@testing-library/react";
import DefinitionDisplay from "../components/DefinitionDisplay";

describe("DefinitionDisplay Component", () => {
  test("renders the search result when provided", () => {
    render(<DefinitionDisplay result="A representative form or pattern." error={null} />);
    expect(screen.getByText("A representative form or pattern.")).toBeInTheDocument();
  });

  test("renders an error message when provided", () => {
    render(<DefinitionDisplay result={null} error="Word not found." />);
    const errorMessage = screen.getByText("Word not found.");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle("color: rgb(255, 0, 0)");
  });

  test("renders the default message when neither result nor error is provided", () => {
    render(<DefinitionDisplay result={null} error={null} />);
    expect(screen.getByText("No word searched yet.")).toBeInTheDocument();
  });
});