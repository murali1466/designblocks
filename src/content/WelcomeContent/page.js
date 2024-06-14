import { Box, Container, Typography } from "@mui/material";
export default function WelcomeContent() {
  return (
    <>
      <Box sx={{ background: "#fff", py: "20px" }}>
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
            Welcome To <b>Plantrich</b>
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              color: "#000000",
              fontFamily: '"Abel", Sans-serif',
              fontSize: "1.2em",
              fontWeight: "400",
              marginTop:"10px"
            }}
          >
            A leading agribusiness company based in the lush green southern
            state of Kerala in India, Plantrich Agritech Private Limited is a
            prominent Indian spices manufacturer and exporter which takes the
            flavours and aroma of the organic riches of the Western Ghats to the
            global market. Committed to sustainable living, healthy eating,
            ethical farming and ecological protection, Plantrich has been
            supporting the local economy of Kerala by empowering farmers with a
            fairtrade system, directly procuring from them sustainably harvested
            organic products like spices, coffee, cocoa, coconut products and
            herbs from the exquisite biodiversity hotspots in Kerala.
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              color: "#000000",
              fontFamily: '"Abel", Sans-serif',
              fontSize: "1.2em",
              fontWeight: "400",
              marginTop:"10px"
            }}
          >
            The spice company’s inclusive mission covers the whole planet.
            Plantrich believes that organic food contributes to healthy living
            by boosting the immune system in humans and bringing about a
            much-required balance to the environment. Consumption of organic
            food, according to epidemiological studies, positively impacts
            immunity, fertility, weight and growth due to its nutritional values
            and beneficial health advantages.
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              color: "#000000",
              fontFamily: '"Abel", Sans-serif',
              fontSize: "1.2em",
              fontWeight: "400",
              marginTop:"10px"
            }}
          >
            By sourcing quality organic and fairtrade products from over 5,000
            farmers in the villages of Kottayam and Idukki of Kerala, Plantrich
            has become a prominent name among Indian spices manufacturers,
            exporters and wholesale spices suppliers. The ethical agriculture
            practices and international-level processing follow USDA National
            Organic Program (NOP) standards and are certified by EU, Fairtrade,
            Natureland and Rainforest Alliance.
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              color: "#000000",
              fontFamily: '"Abel", Sans-serif',
              fontSize: "1.2em",
              fontWeight: "400",
              marginTop:"10px"
            }}
          >
            As part of minimising the gender gap in the agriculture sector and
            providing financial independence to women, Plantrich has been
            supportive of women farmers and labourers who are the backbone of
            our business. Plantrich’s farmers’ cooperative is led by vibrant
            women whose earnest activities of pesticide-free and chemical-free
            practices have taken the company’s name to the international organic
            market as a reputed wholesale spices supplier from the land of
            agriculture.
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              color: "#000000",
              fontFamily: '"Abel", Sans-serif',
              fontSize: "1.2em",
              fontWeight: "400",
              marginTop:"10px"
            }}
          >
            As a leading global spices manufacturer and exporter, Plantrich has
            been able to establish a huge customer base across India, Europe,
            the US, and the Middle East.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
