import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import userEvent from '@testing-library/user-event';
import CartDrawer from "./Drawer";
import React from "react";

describe('Cart Drawer', () => {

    test('Cart Drawer Renders', async () => {
        const user = userEvent.setup();
        const cart = ({
            items: [
                {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "rating": {
                        "rate": 3.9,
                        "count": 120
                    }
                },
                {
                    "id": 2,
                    "title": "Mens Casual Premium Slim Fit T-Shirts ",
                    "price": 22.3,
                    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    "rating": {
                        "rate": 4.1,
                        "count": 259
                    }
                }
            ]
        });
        const handleRemove = vi.fn().mockImplementation(() => {
            console.log('removed');
        });

        const handleChange = vi.fn().mockImplementation(() => {
            console.log('changed');
        });
        render(<CartDrawer cart={cart} handleRemove={handleRemove} handleChange={handleChange} />);
        const icon = screen.getByTestId('icon');
        await user.click(icon);
    });

    test('remove button calls handleRemove', async () => {
        const user = userEvent.setup();
        const cart = ({
            items: [
                {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "rating": {
                        "rate": 3.9,
                        "count": 120
                    }
                },
                {
                    "id": 2,
                    "title": "Mens Casual Premium Slim Fit T-Shirts ",
                    "price": 22.3,
                    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    "rating": {
                        "rate": 4.1,
                        "count": 259
                    }
                }
            ]
        });
        const handleRemove = vi.fn().mockImplementation(() => {
            console.log('removed');
        });

        render(<CartDrawer cart={cart} handleRemove={handleRemove} />);
        const icon = screen.getByTestId('icon');
        await user.click(icon);
        let removes = screen.getAllByText(/remove/i);
        await user.click(removes[0]);
        expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    test('handle change correctly', async () => {
        const user = userEvent.setup();
        const cart = ({
            items: [
                {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "rating": {
                        "rate": 3.9,
                        "count": 120
                    }
                },
                {
                    "id": 2,
                    "title": "Mens Casual Premium Slim Fit T-Shirts ",
                    "price": 22.3,
                    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    "rating": {
                        "rate": 4.1,
                        "count": 259
                    }
                }
            ]
        });
        const handleRemove = vi.fn().mockImplementation(() => {
            console.log('removed');
        });

        const handleChange = vi.fn().mockImplementation(() => {
            console.log('changed');
        });
        render(<CartDrawer cart={cart} handleRemove={handleRemove} handleChange={handleChange} />);
        const icon = screen.getByTestId('icon');
        await user.click(icon);
        const spinbuttons = screen.getAllByRole('spinbutton');
        await user.click(spinbuttons[0]);
        await user.keyboard('{backspace}10')
         screen.debug();
        await expect(handleChange).toHaveBeenCalledTimes(2);
    });
});