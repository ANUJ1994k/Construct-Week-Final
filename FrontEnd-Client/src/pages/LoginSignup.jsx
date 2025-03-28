import React from 'react'
import { Box,Container,Image } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  return (
    <>
    <Container>
      <Image src='https://my.asos.com/Content/images/asos-logo-2022-93x28.png' width="25"/>
      <Container>
      <Box display="flex" alignItems="center">
      <Box
        className="box-left"
        sx={{ cursor: "pointer", padding: "10px 20px" }}
        onClick={() => useNavigate("/signin")}
      >
        JOIN
      </Box>
      <Box
        sx={{
          width: "2px",
          height: "30px",
          backgroundColor: "black",
          margin: "0 10px",
        }}
      />
      <Box
        className="box-right"
        sx={{ cursor: "pointer", padding: "10px 20px" }}
        onClick={() => navigate("/signin")}
      >
        SIGN IN
      </Box>
    </Box>
      </Container>
    </Container>
    </>
  )
}

export default LoginSignup