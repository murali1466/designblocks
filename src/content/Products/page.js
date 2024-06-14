import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const products = [
  {
    name: "MACE",
    image: "/Mace-1-1.png",
  },
  {
    name: "WHITE PEPPER",
    image: "/White-Pepper-1-1.png",
  },
  {
    name: "TURMERIC",
    image: "/Turmeric-1.png",
  },
  {
    name: "CINNAMON",
    image: "/Cinnamon-1.png",
  },
  {
    name: "BLACK PEPPER",
    image: "/Cardamom-1-1.png",
  },
  {
    name: "NUTMEG",
    image: "/Mace-1-2.png",
  },
  {
    name: "GINGER",
    image: "/Ginger-1-1.png",
  },
  {
    name: "CLOVES",
    image: "/Cloves-1-2-1.png",
  },
  {
    name: "CARDAMON",
    image: "/Cardamom-1-1.png",
  },
  {
    name: "CURRY LEAF",
    image: "/Curry-Leaf-1-1.png",
  },
  {
    name: "CHILLI",
    image: "/Chilli-1-1.png",
  },
  {
    name: "COCOA",
    image: "/cocoa-1.png",
  },
  {
    name: "ARABICA COFFEE",
    image: "/Coffee-Arabica1.png",
  },
  {
    name: "ROBUSTA COFFEE",
    image: "/Coffee-Robasta2.png",
  },
  {
    name: "SPECIALLITY COFFEE",
    image: "/Special-Coffee.png",
  },
];

export default function ProductsContent() {
  return (
    <>
      <Box sx={{ py: "20px", background: "#d6efc7" }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#184d47",
              fontFamily: '"Abel", Sans-serif',
              fontWeight: "400",
              fontSize: "4em",
            }}
          >
            Plantrich<b> Products</b>
          </Typography>
          <Grid container spacing={2}>
            {products.map((product, index) => (
              <React.Fragment key={index}>
                <Grid item xs={6} sm={4} lg={2} zeroMinWidth sx={{textAlign:"center"}}>
                  <img src={product.image} width={"100px"} height="auto" alt={product.name} />
                  <Typography
                    sx={{
                      color: "#184d47",
                      fontFamily: '"Abel", Sans-serif',
                      fontSize: "1.3em",
                      fontWeight: "900",
                    }}
                  >
                    {product.name}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
