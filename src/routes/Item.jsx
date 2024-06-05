import { useOutletContext, useParams, useRouteLoaderData } from "react-router-dom";
import { Box, Image, Card, Grid, Flex, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { useState } from "react";

function Item() {
    const data = useRouteLoaderData("root");
    const [cart, handleAddToCart] = useOutletContext();
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const item = getItem(id);   

    function getItem(id) {
        return data.find(x => x.id == id);
    }

    function handleChange(value) {
        setQuantity(parseInt(value));
    }

    return (
        <>
            <Flex justify='center' align='center'>
                <Grid gridTemplateColumns='2fr 1fr' padding='5rem'>
                    <Flex justifyContent='center' alignItems='center'>
                        <Card background='#f1f1f1' h='xl' w='xl' justifyContent='center' alignItems='center'>
                            <Image mixBlendMode={'multiply'} src={item.image} objectFit='contain' width='60%' />
                        </Card>
                    </Flex>
                    <Box>
                        <Grid gap={10}>
                            <Grid gridTemplateColumns='1fr min-content min-content' justify-content='space-between' w='100%' >
                                <Box fontWeight='bold'>{item.title}</Box>
                                <Box>{item.price.toFixed(2)}</Box>
                                <Box></Box>
                            </Grid>
                            <Box fontSize='sm'>{item.description}</Box>
                            <NumberInput size='lg' maxW={32} defaultValue={quantity} min={1} step={1} onChange={handleChange}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Flex flexDir='column' gap='1rem'>
                                <Button onClick={() => handleAddToCart(data,id,quantity)}>Add to bag</Button>
                                <Button variant='outline'>Add to wishlist</Button>
                            </Flex>
                        </Grid>
                    </Box>
                </Grid>
            </Flex>
        </>
    )
}

export default Item;