import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe } from "vitest";
import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import routes from "./routes.jsx";
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';


describe('Item', () => {
  let router = createMemoryRouter(routes, {
    initialEntries: ["/store/item/1"]
  });

  test('Item snapshot', async () => {
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });

  test('Item add to bag', async () => {
    const user = userEvent.setup();
    const { container } = render(<RouterProvider router={router} />);
    const button = screen.getByRole('button', { name: 'Add to bag' });
    await user.click(button);
    await user.click(button);

  })

});