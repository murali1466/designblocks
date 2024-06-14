"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footeritems = [];

export default function FooterContent() {
  return (
    <>
      <Box sx={{ background: "#D6EFC7", py: "20px" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item>
              <Box>
                <img
                  src="/PLANRICH_Logo_Vertical.png"
                  alt="plantrich"
                  width={"100%"}
                  height={"139px"}
                  style={{ mixBlendMode: "darken",objectFit:"contain"}}
                />
              </Box>
              <Typography sx={{ fontFamily: "Abel", color: "#7A7A7A" }}>
                Founded in 1997, Plantrich Agritech Private Limited is a green
                business initiative dedicated to supplying sustainable products
                for those who care about the world they live in and empowering
                farmers all around the world.
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                  "& svg": {
                    color: "#000",
                    marginLeft: "8px",
                  },
                  marginTop: "20px",
                }}
              >
                <FacebookRoundedIcon />
                <InstagramIcon />
                <YouTubeIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
