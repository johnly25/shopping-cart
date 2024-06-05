import { Box } from "@chakra-ui/react";
import background from '../assets/homepage_background.jpg'

function Home() {
    return (
        <>
            <Box h='100vh' bgImage={background} bgSize='cover'>
            </Box>
        </>
    )
}

export default Home;