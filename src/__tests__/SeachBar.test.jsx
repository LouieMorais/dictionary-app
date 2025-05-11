import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  test("renders input, label, and button", () => {
    render(<SearchBar value="" onChange={() => {}} onSubmit={() => {}} />);
    expect(screen.getByLabelText("What word are you looking up, today?")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText("Look Up")).toBeInTheDocument();
  });

  test("calls onChange when input changes", () => {
    const handleChange = vi.fn();
    render(<SearchBar value="" onChange={handleChange} onSubmit={() => {}} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  test("calls onSubmit when form is submitted", () => {
    const handleSubmit = vi.fn();
    render(<SearchBar value="" onChange={() => {}} onSubmit={handleSubmit} />);
    fireEvent.submit(screen.getByRole("form"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});