import { Flex, Text, Image, Box, SimpleGrid } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

import Card from '../Card/Card';

function CardList({ data }) {
    const listItems = data.map(item => (
        <Box key={item.id} maxW='sm' as={ReactRouterLink} to={"./item/" + item.id} maxH='lg' h='lg'>
            <Flex background='#f1f1f1' justifyContent='center' alignItems='center' h='100%' w='100%'>
                <Image mixBlendMode={'multiply'} src={item.image} objectFit='contain' width='60%' />
            </Flex>
            <Box>
                <Text>
                    {item.title}
                </Text>
                <Text>
                    {item.price.toFixed(2)}
                </Text>
            </Box>
        </Box>
    ));

    return (
        <>
            <Flex justifyContent='center' padding='3rem 3rem 10rem 3rem'>
                <SimpleGrid spacingX='5' spacingY={'100'} columns={4} >
                    {listItems}
                </SimpleGrid>
            </Flex>
        </>
    );
}

export default CardList;