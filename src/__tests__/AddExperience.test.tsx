import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "../utils/test-utils";
import AddExperience from "../components/Experience/AddExperience";

describe("Testing input focus", () => {
  test("Title input", async () => {
    render(<AddExperience />);
    const titleInput = screen.getByTestId("title-input");
    const titleLabel = screen.getByTestId("title-label");
    expect(titleInput).not.toHaveFocus();
    userEvent.click(titleLabel);
    await waitFor(() => expect(titleInput).toHaveFocus());
  });

  test("Company input", async () => {
    render(<AddExperience />);
    const titleInput = screen.getByTestId("company-input");
    const titleLabel = screen.getByTestId("company-label");
    expect(titleInput).not.toHaveFocus();
    userEvent.click(titleLabel);
    await waitFor(() => expect(titleInput).toHaveFocus());
  });

  test("Date input", async () => {
    render(<AddExperience />);
    const titleInput = screen.getByTestId("date-input");
    const titleLabel = screen.getByTestId("date-label");
    expect(titleInput).not.toHaveFocus();
    userEvent.click(titleLabel);
    await waitFor(() => expect(titleInput).toHaveFocus());
  });

  test("City input", async () => {
    render(<AddExperience />);
    const titleInput = screen.getByTestId("city-input");
    const titleLabel = screen.getByTestId("city-label");
    expect(titleInput).not.toHaveFocus();
    userEvent.click(titleLabel);
    await waitFor(() => expect(titleInput).toHaveFocus());
  });
});
