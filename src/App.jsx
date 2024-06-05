import Root from './components/Root/Root'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { ScrollRestoration } from 'react-router-dom';
const theme = extendTheme({
  components: {
    Button: {
      variants: {
        'icons': {
          border: 'none',
          _groupHover: {
            color: 'black',
            border: 'none'
          },
          _hover: {
            color: 'red',
            backgroundColor: 'none',
            border: 'none'
          }
        }
      },
    },
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Root />
      <ScrollRestoration />
    </ChakraProvider>
  )
}
export default App
