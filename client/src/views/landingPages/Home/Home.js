import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "common/Container";
import { Features, Footer, Hero, Highlights } from "./components";

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={"alternate.main"} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Highlights />
      </Container>
      <Container>
        <Features />
      </Container>
    </Box>
  );
};

export default Home;
