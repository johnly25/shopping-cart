import { Flex, Box } from '@chakra-ui/react'
import NotificationBar from '../NotificationBar/NotificationBar';
import { Outlet } from 'react-router-dom'
import LargeWithAppLinksAndSocial from '../Footer/Footer';
import Simple from '../Nav/Nav';
import { useState } from 'react';

function Root() {
    const [cart, setCart] = useState({
        items: [
        ]
    });

    function handleRemove(item) {
        const updatedItems = cart.items.filter((cartItem) => cartItem.id != item.id);
        setCart({ ...cart, items: updatedItems });
    }

    function handleChange(item, value) {
        const updatedItems = cart.items.map(cartItem => {
            if (cartItem.id == item.id) {
                return { ...item, quantity: parseInt(value) }
            } else {
                return cartItem;
            }
        });
        setCart({ ...cart, items: updatedItems });
    };

    function handleAddToCart(data, id, quantity) {
        const item = data.find(x => x.id == id);
        const found = cart.items.find((item) => item.id == id);
        if (found) {
            const updatedItems = cart.items.map(item => {
                if (item.id == id) {
                    return { ...item, quantity: item.quantity + quantity}
                } else {
                    return item;
                }
            });
            setCart({ ...cart, items: updatedItems });
        } else {
            setCart({
                ...cart,
                items: [...cart.items, { ...item, quantity: quantity }]
            });
        }
    }

    return (
        <Flex direction='column' height='100vh'>
            <NotificationBar />
            <Simple cart={cart} setCart={setCart} handleRemove={handleRemove} handleChange={handleChange} />
            <Box>
                <Outlet context={[cart, handleAddToCart]} />
            </Box>
            <LargeWithAppLinksAndSocial />
        </Flex>

    );
}

export default Root;