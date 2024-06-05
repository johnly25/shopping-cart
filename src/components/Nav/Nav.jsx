import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack, 
  Icon
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [{ name: 'Store', link: 'store' }];
import CartDrawer from '../Drawer/Drawer';
const NavLink = (props) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={'/' + props.link}
    as={ReactRouterLink}
  >
    {props.name}
  </Link>
);

export default function Simple({cart, handleRemove, handleChange}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const totalItems = getTotalItems();

  function getTotalItems() {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  }
  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box to={'/'} as={ReactRouterLink}>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} name={link.name} link={link.link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems='center'>
            <Box position={'relative'}>
              <CartDrawer cart={cart} handleRemove ={handleRemove} handleChange={handleChange}/>
              <Box position='absolute' top='-12px' right='-5px' >{totalItems != 0 ? totalItems : '' }</Box>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} name={link.name} link={link.link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}