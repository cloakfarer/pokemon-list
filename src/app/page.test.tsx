import { render, screen } from "@testing-library/react";
import Home from "./page";

vi.mock("./components/list/list", () => ({
  List: () => <div data-testid="fake-list">LIST</div>,
}));

describe("Page", () => {
  it("renders headline", async () => {
    const ui = await Home();
    render(ui);

    expect(
      screen.getByRole("heading", { level: 1, name: /pokémon list/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("fake-list")).toBeInTheDocument();
  });
});
