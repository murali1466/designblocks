import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function HeroContent() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "400px",
          background:"#184d47",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        {/* <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/xqzagSjaUnQ&t=?autoplay=1&mute=1&loop=1&playlist=xqzagSjaUnQ&t&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0"
            allowFullScreen
            allow="autoplay"
          ></iframe>
        </Box> */}
        <Container maxWidth="lg">
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: '"Abel", Sans-serif',
                fontSize: "64px",
                fontWeight: "400",
              }}
              variant="h2"
            >
              Plantrich
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Abel", Sans-serif',
                fontSize: "32px",
                fontWeight: "400",
                marginRight: "3px",
              }}
            >
              Empowering<b style={{ marginLeft: "10px" }}>Farmers</b>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
