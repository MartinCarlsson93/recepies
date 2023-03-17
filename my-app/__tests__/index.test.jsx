// __tests__/index.test.jsx
import { render, screen } from "@testing-library/react";
import Main from "../src/pages/index";
import "@testing-library/jest-dom";
describe("Main", () => {
  it("renders a heading", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => {
          return Promise.resolve("");
        },
      })
    );
    render(<Main />);
    const heading = screen.getByText("All recipesasdasasd");
    expect(heading).toBeInTheDocument();
  });
});