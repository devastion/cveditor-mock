import { render, fireEvent, screen } from "../utils/test-utils";
import AddExperience from "../components/Experience/AddExperience";

describe("Testing input focus", () => {
  const { getByTestId } = render(<AddExperience />);
  test("Title input", () => {
    const titleInput = getByTestId("title-input");
    const titleLabel = getByTestId("title-label");
    fireEvent.click(titleLabel);
    titleInput.focus();
    expect(titleInput).toHaveFocus();
  });
});
