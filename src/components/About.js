import { Box, Container, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Container sx={{ bgcolor: "#3770FF", py: 4 }}>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", py: 4, color: "white" }}
      >
        About Us
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "black",
          fontSize: { md: "15px", sm: "13px", xs: "10px" },
        }}
      >
        Welcome to the future of filmmaking with myreeldream.ai – where dreams
        become reality, and creativity knows no limits.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            my: 6,
            width: 800,
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center", color: "white" }}>
            Mission Statment
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              fontSize: { md: "15px", sm: "13px", xs: "10px" },
            }}
          >
            At myreeldream.ai, we are driven by a singular mission: to
            democratize the filmmaking process. We believe in empowering
            individuals from all walks of life, whether seasoned professionals
            or aspiring amateurs, to unleash their creative potential and bring
            their cinematic visions to life. By harnessing the power of
            cutting-edge technologies such as artificial intelligence,
            text-to-video, and smart contracts, we aim to revolutionize the
            entertainment industry and redefine the way films are conceived,
            produced, and showcased.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            width: 800,
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center", color: "white" }}>
            Vision Statment
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              fontSize: { md: "15px", sm: "13px", xs: "10px" },
            }}
          >
            Our vision at myreeldream.ai is to create a vibrant and inclusive
            ecosystem where creativity knows no bounds. We envision a future
            where anyone with a story to tell can easily transform their ideas
            into captivating visual experiences, regardless of financial
            constraints or technical expertise. By fostering collaboration,
            providing access to resources, and offering unparalleled
            opportunities for exploration and expression, we aspire to inspire a
            new generation of filmmakers and revolutionize the way stories are
            shared and experienced around the globe.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
