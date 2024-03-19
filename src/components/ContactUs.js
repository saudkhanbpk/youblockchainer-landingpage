import { Box, Typography, TextField, Container, Button } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Container sx={{ my: 9 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "#3770FF" }} variant="h2">
          Contact Us
        </Typography>
        <Typography>
          We'd love to hear from anyone and everyone, drop a line below.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 2,
          gap: 2,
        }}
      >
        <TextField
          sx={{ width: "50vw" }}
          required
          id="outlined-firstName"
          label="Full Name"
        />
        <TextField
          sx={{ width: "50vw" }}
          required
          id="outlined-firstName"
          label="Email"
        />
        <TextField
          sx={{ width: "50vw" }}
          required
          id="outlined-firstName"
          label="Company Name"
        />
        <TextField
          sx={{ width: "50vw" }}
          required
          id="outlined-firstName"
          label="Phone Number"
        />
        <Button
          sx={{
            width: "50vw",
            color: "white",
            backgroundColor: "#3770FF",
            "&:hover": { color: "#3770FF", border: "2px solid #3770FF" },
          }}
        >
          let's Talk
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
