import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter} from "react-router-dom";
import routes from "./routes/routes.jsx";



describe('Store', () => {
  let router = createMemoryRouter(routes, {
    initialEntries: ["/store"]
  });
 
  test('App Renders', async () => {
    render(<RouterProvider router={router} />);
  });

  test('Click on Item', async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    let items = screen.getAllByRole('img');
    await user.click(items[0]);
    items = screen.getAllByRole('img');
    await expect(items.length).toBe(1);
  });
});

describe('Store item page', () => {
  let router = createMemoryRouter(routes, {
    initialEntries: ["/store/item/1"]
  });

  test('Add to bag button works correctly', async () => {
    let user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const buttons = screen.getAllByRole('button', { name: 'Add to bag' });
    await user.click(buttons[0]);
    expect(screen.getByText(/^1$/i)).toBeInTheDocument();
  });

  test('change number of items and then add to bag', async () => {
    let user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const button = screen.getByRole('button', { name: 'Add to bag' });
    const number = screen.getByRole('spinbutton');
    await user.click(number);
    await user.keyboard('{backspace}10');
    await user.click(button);
    expect(screen.getByText(/^10$/i)).toBeInTheDocument();

  });
});



