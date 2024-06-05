import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import routes from "./routes.jsx";

describe('Store', () => {
  let router = createBrowserRouter(routes, {
    initialEntries: ["/store"]
  });
  test('Test store snapshop', () => {
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });
});