import * as React from "react";
import { Box, Image, Container } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box
      zIndex={120}
      w="full"
      bg="transparent"
      position="absolute"
      top="0px"
      boxSizing="border-box"
      py={4}
    >
      <Container maxW="container.xl">
        <Link to="/">
          <Image src={Logo} alt="Logo" />
        </Link>
      </Container>
    </Box>
  );
}
