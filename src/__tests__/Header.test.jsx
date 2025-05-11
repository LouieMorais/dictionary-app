import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("renders the app title", () => {
    render(<Header />);
    expect(screen.getByText("Simple Dictionary")).toBeInTheDocument();
  });

{/* Skipped until graphical logo implemented */}
  test.skip("renders the logo", () => {
    render(<Header />);
    expect(screen.getByAltText("App Logo")).toBeInTheDocument(); 
  });
});