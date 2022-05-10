import { render, fireEvent, screen } from "../utils/test-utils";
import AddExperience from "../components/Experience/AddExperience";

describe("Testing input focus", () => {
  test("Title input", () => {
    render(<AddExperience />);
    const titleInput = screen.getByTestId("title-input");
    const titleLabel = screen.getByTestId("title-label");
    fireEvent.click(titleLabel);
    expect(titleInput.focus());
  });

  test("Company input", () => {
    render(<AddExperience />);
    const titleInput = screen.getByTestId("company-input");
    const titleLabel = screen.getByTestId("company-label");
    fireEvent.click(titleLabel);
    expect(titleInput.focus());
  });

  test("Date input", () => {
    render(<AddExperience />);
    const titleInput = screen.getByTestId("date-input");
    const titleLabel = screen.getByTestId("date-label");
    fireEvent.click(titleLabel);
    expect(titleInput.focus());
  });

  test("City input", () => {
    render(<AddExperience />);
    const titleInput = screen.getByTestId("city-input");
    const titleLabel = screen.getByTestId("city-label");
    fireEvent.click(titleLabel);
    expect(titleInput.focus());
  });
});
