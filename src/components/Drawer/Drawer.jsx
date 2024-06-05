import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Icon,
    Flex,
    Box,
    Grid,
    Image,
    Card,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, 
    Link,
    Divider
} from '@chakra-ui/react'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useEffect, useRef } from 'react'

export default function CartDrawer({ cart, handleRemove, handleChange}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef();
    const size = 'md';
    const subTotal = getSubTotal();

    function getSubTotal() {
        return cart.items.reduce((subTotal, item) => subTotal + item.price * item.quantity, 0).toFixed(2);
    }

    const bag = cart.items.map(item =>
        <Grid key={item.id} gridTemplateColumns='auto 1fr' gap='1rem'>
            <Card background='#f1f1f1' justifyContent='center' alignItems='center'>
                <Image width='8rem' mixBlendMode={'multiply'} src={item.image} objectFit='contain' />
            </Card>
            <Box>
                <Grid gap='0' gridTemplateRows='min-content min-content auto' height='100%'>
                    <Box>{item.title}</Box>
                    <Box>{item.price.toFixed(2)}</Box>
                    <Flex justifyContent='space-between' alignSelf='end'>
                        <NumberInput size='md' maxW={32} defaultValue={item.quantity} min={1} step={1} onChange={(e) => handleChange(item, e)}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <Link alignSelf='center' onClick={()=>handleRemove(item)}> Remove </Link>
                    </Flex>
                </Grid>
            </Box>
        </Grid>
    );

    return (
        <>
            <Icon as={PiShoppingCartSimpleBold} w={8} h={8} onClick={onOpen} data-testid="icon"/>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={size}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Shopping Bag</DrawerHeader>
                    <DrawerBody>
                        <Grid gap='2rem'>
                            {bag}
                        </Grid>

                    </DrawerBody>
                    <Divider />
                    <DrawerFooter>
                        <Flex flexDir='column' gap='2rem' alignItems='center' justifyContent='center' width='100%' padding='1rem 0'>
                            <Flex justifyContent='space-between' width='100%'>
                                <Box>Subtotal</Box>
                                <Box>${subTotal}</Box>
                            </Flex>
                            <Button width='80%' size='lg' variant='solid' backgroundColor='black'  color='white'>Checkout + Review</Button>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}