import CircleIcon from "@mui/icons-material/Circle";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function OurValues() {
  return (
    <>
      <Box sx={{ py: "20px", background: "#fff" }}>
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
            Our<b> Values</b>
          </Typography>
          <Grid container spacing={2} alignItems={"center"} mt={"20px"}>
            <Grid item xs={12} lg={6}>
              <Typography
                sx={{
                  color: "#184d47",
                  fontFamily: '"Abel", Sans-serif',
                  fontSize: "2.5em",
                  fontWeight: "400",
                }}
                variant="h2"
              >
                ETHICAL BUSINESS MODEL
              </Typography>
              <Typography
                sx={{
                  color: "#000000",
                  fontFamily: '"Abel", Sans-serif',
                  fontSize: "1.2em",
                  fontWeight: "400",
                }}
              >
                Our business model allows all parties to participate in a fully
                traceable and fair trade chain, from our farmers to our factory
                and on to our customers. Everyone has a part to play in
                supporting a sustainable environment.
              </Typography>
            </Grid>
            <Grid
              item
              sx={{ overflow: "hidden", borderRadius: "10px" }}
              xs={12}
              lg={6}
            >
              <Box
                sx={{
                  "&:hover .zoomimg": {
                    lg: { transform: "scale(1.4)" },
                  },
                }}
              >
                <img
                  src="/22.jpg"
                  className="zoomimg"
                  width={"100%"}
                  height={"100%"}
                  style={{
                    animation: "skeleton-loading 1s linear infinite alternate",
                    transition: "transform 0.8s",
                    borderRadius: "10px",
                    objectFit: "contain",
                    overflow: "hidden",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} sx={{order:{lg:2}}}>
              <Typography
                sx={{
                  color: "#184d47",
                  fontFamily: '"Abel", Sans-serif',
                  fontSize: "2.5em",
                  fontWeight: "400",
                }}
                variant="h2"
              >
                PROVEN DELIVERY RELIABILITY
              </Typography>
              <Typography
                sx={{
                  color: "#000000",
                  fontFamily: '"Abel", Sans-serif',
                  fontSize: "1.2em",
                  fontWeight: "400",
                }}
              >
                Plantrich Agri Tech has large warehouse facilities in Kerala,
                promptly delivering stock to our customers in over 25 countries
                worldwide.
              </Typography>
              <List>
                <ListItem sx={{py:"0px"}}>
                  <CircleIcon sx={{ color: "#000", fontSize: "8px" }} />
                  <ListItemText sx={{ color: "#000",fontFamily:"Abel",pl:"10px" }}>
                    25+ EXPORTING DESTINATIONS5000+ FAMILY FARMERS
                  </ListItemText>
                </ListItem>
                <ListItem sx={{py:"0px"}}>
                  <CircleIcon sx={{ color: "#000", fontSize: "8px" }} />
                  <ListItemText sx={{ color: "#000",fontFamily:"Abel",pl:"10px" }}>
                    3000+ TONS ANNUAL PROCESSING CAPACITY5000+ FAMILY FARMERS
                  </ListItemText>
                </ListItem>
                <ListItem sx={{py:"0px"}}>
                  <CircleIcon sx={{ color: "#000", fontSize: "8px", }} />
                  <ListItemText sx={{ color: "#000",fontFamily:"Abel",pl:"10px" }}>
                    5000+ FAMILY FARMERS
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              sx={{ overflow: "hidden", borderRadius: "10px",order:{lg:1}}}
              xs={12}
              lg={6}
            >
              <Box
                sx={{
                  "&:hover .zoomimg": {
                    lg: { transform: "scale(1.4)" },
                  },
                }}
              >
                <img
                  src="/arabica.jpg"
                  className="zoomimg"
                  width={"100%"}
                  height={"100%"}
                  style={{
                    animation: "skeleton-loading 1s linear infinite alternate",
                    transition: "transform 0.8s",
                    borderRadius: "10px",
                    objectFit: "contain",
                    overflow: "hidden",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
