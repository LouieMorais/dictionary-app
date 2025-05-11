import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("renders the SearchBar component", () => {
    render(<App />);
    expect(screen.getByLabelText("What word are you looking up, today?")).toBeInTheDocument();
    expect(screen.getByText("Look Up")).toBeInTheDocument();
  });

  test("updates searchQuery when input changes", () => {
    render(<App />);
    const input = screen.getByLabelText("What word are you looking up, today?");
    fireEvent.change(input, { target: { value: "example" } });
    expect(input.value).toBe("example");
  });

  test("displays the definition when a valid word is searched", () => {
    render(<App />);
    const input = screen.getByLabelText("What word are you looking up, today?");
    const button = screen.getByText("Look Up");

    fireEvent.change(input, { target: { value: "example" } });
    fireEvent.click(button);

    expect(screen.getByText("Definition: A representative form or pattern.")).toBeInTheDocument();
  });

  test("displays an error message when an invalid word is searched", () => {
    render(<App />);
    const input = screen.getByLabelText("What word are you looking up, today?");
    const button = screen.getByText("Look Up");

    fireEvent.change(input, { target: { value: "invalidword" } });
    fireEvent.click(button);

    expect(screen.getByText("Word not found.")).toBeInTheDocument();
  });

  test("clears the error message when a valid word is searched after an invalid one", () => {
    render(<App />);
    const input = screen.getByLabelText("What word are you looking up, today?");
    const button = screen.getByText("Look Up");

    // Search for an invalid word
    fireEvent.change(input, { target: { value: "invalidword" } });
    fireEvent.click(button);
    expect(screen.getByText("Word not found.")).toBeInTheDocument();

    // Search for a valid word
    fireEvent.change(input, { target: { value: "example" } });
    fireEvent.click(button);
    expect(screen.getByText("Definition: A representative form or pattern.")).toBeInTheDocument();
    expect(screen.queryByText("Word not found.")).not.toBeInTheDocument();
  });
});