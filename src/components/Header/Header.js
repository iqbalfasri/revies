import * as React from 'react';
import {Box, Text, Container, Stack, Button} from "@chakra-ui/react";

//TODO: Need to dynamic
export default function Header() {
  return (
    <Box w="full" h="648px" bg="brand.black" position="relative">
      <Box position="relative"
           h="100%"
           w="full"
           bgRepeat="no-repeat"
           bgSize="cover"
           bgPosition="center"
           bgImage={`url('https://image.tmdb.org/t/p/original/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg')`}>
      </Box>

      <Box top={0} id="overlay" position="absolute" w="100%" h="100%"
           bgGradient="linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%)"/>

      <Box display="flex" alignItems="center" justifyContent="center" bg="" w="100%" h="100%" top={0}
           position="absolute" zIndex={10}>
        <Container maxW="container.xl">
          <Stack maxW="632px" spacing="24px">
            <Text fontSize="56px" fontWeight="bold">Godzilla vs. Kong</Text>
            <Text>In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a
              collision course that will see the two most powerful forces of nature on the planet collide in a
              spectacular battle for the ages.</Text>
            <Button w="100%" maxW="200px" borderRadius="40px" color="brand.yellow" variant="outline"
                    outlineColor="brand.yellow" _hover={{backgroundColor: 'brand.yellow01'}}>Watch Now</Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}