import { Box, Container, Typography } from "@mui/material";

export default function OurProcessContent() {
  return (
    <>
      <Box sx={{ py: "20px", background: "#fad586" }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#184d47",
              fontFamily: '"Abel", Sans-serif',
              fontWeight: "400",
              fontSize: "4em",
            }}
            variant="h2"
          >
            Our<b> Process</b>
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <img
              src="/4STEPS-3-768x143-1-1.png"
              width={"100%"}
              height={"100px"}
              alt="our process"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
