import {Box, Button, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";

const SectionTwo = () => {

    const navigate = useNavigate();

    return (
        <Grid container
              sx={{
                  display: "flex",
                  py: 4
              }}
        >
            <Grid xs={12} sm={9} md={6} lg={7}
                  sx={{
                      mx: "auto",
                      height: {
                          xs: "50vh",
                          sm: "55vh",
                          md: "60vh"
                      },
                      order: {
                          xs: "1",
                          md: "0"
                      }
                  }}
            >
                <img src="/src/assets/banner2.jpg" alt=""
                     style={{width: "100%", height: "100%"}}
                />
            </Grid>
            <Grid xs={12} md={6} lg={5}
                  sx={{
                      p: {
                          xs: "0 30px 3vh",
                          sm: "0 80px 3vh",
                          md: "0 60px 3vh"
                      },
                      order: {
                          xs: "0",
                          md: "1"
                      }
                  }}
            >
                <Typography
                    sx={{
                        py: "2vh",
                        fontSize: {
                            xs: "2rem",
                            sm: "2.5rem",
                            md: "3rem"
                        }
                    }}
                >
                    درباره ما
                </Typography>
                <Typography variant={""}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab animi aperiam beatae dignissimos
                    ducimus ea eveniet exercitationem illum inventore ipsum, itaque libero magni minus modi
                    necessitatibus nihil obcaecati optio quae ratione rem tempore temporibus tenetur, vero
                    voluptates?
                </Typography>
                <Box
                    sx={{
                        my: 5,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button variant={"contained"}
                            sx={{
                                backgroundColor: grey[900]
                            }}
                            onClick={() => navigate("/about-us")}
                    >
                        بیشتر بدانید
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SectionTwo;