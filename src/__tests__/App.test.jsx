import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  describe("Rendering", () => {
    test("renders the Header component", () => {
      render(<App />);
      expect(screen.getByText("Simple Dictionary")).toBeInTheDocument();
    });

    test("renders the SearchBar component", () => {
      render(<App />);
      expect(screen.getByLabelText("What word are you looking up, today?")).toBeInTheDocument();
      expect(screen.getByText("Look Up")).toBeInTheDocument();
    });

    test("renders the DefinitionDisplay component", () => {
      render(<App />);
      expect(screen.getByText("No word searched yet.")).toBeInTheDocument();
    });
  });

  describe("Search Functionality", () => {
    test("displays the definition when a valid word is searched", () => {
      render(<App />);
      const input = screen.getByLabelText("What word are you looking up, today?");
      const button = screen.getByText("Look Up");

      fireEvent.change(input, { target: { value: "example" } });
      fireEvent.click(button);

      expect(screen.getByText("A representative form or pattern.")).toBeInTheDocument(); 
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
      expect(screen.getByText("A representative form or pattern.")).toBeInTheDocument();
      expect(screen.queryByText("Word not found.")).not.toBeInTheDocument();
    });

    test("renders the default message when no search has been performed", () => {
      render(<App />);
      expect(screen.getByText("No word searched yet.")).toBeInTheDocument();
    });
  });
});