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
});
