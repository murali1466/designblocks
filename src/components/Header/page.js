import { AppBar, Box, Container } from "@mui/material";
export default function HeadercContent() {
  return (
    <>
      <AppBar sx={{background:"#fff",position:"initial"}} elevation={0}>
        <Container>
        <Box><img src="/PLANRICH_Logo_Vertical.png"  alt="PLANTRICH" width={"200px"} height={"100px"} style={{objectFit:"scale-down"}}/></Box>
        </Container>
      </AppBar>
    </>
  );
}
