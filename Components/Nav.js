import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Nav = () => {
  return (
    <>
      <Container
        sx={{
          bgcolor: "primary.light",
          height: "13vh",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ display: "flex" }}>
            Logo
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "2vh", alignItems: "center" }}>
          <Typography variant="h5">About us</Typography>
          <Typography variant="h5">Contact</Typography>
          <Typography variant="h5">More</Typography>
          <Button color="secondary" variant="contained">
            click here
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Nav;
