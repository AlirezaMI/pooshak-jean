import Grid from "@mui/material/Unstable_Grid2";
import Logo from "../components/header/Logo";
import {Link} from "react-router-dom";
import {Instagram, Telegram, WhatsApp} from "@mui/icons-material";
import {Box, Button, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import * as PropTypes from "prop-types";
import {Component} from "react";

class Boc extends Component {
    render() {
        return null;
    }
}

const FooterContainer = () => {
    return (
        <>
            <Grid container
                  sx={{
                      flexDirection: "column",
                      px: {
                          md: 10,
                          lg: 20,
                          xl: 35
                      },
                      backgroundColor: grey[900],
                  }}
            >
                <Grid container
                      sx={{
                          mx: {
                              xs: 2,
                              sm: 5,
                              md: 10,
                              xl: 15
                          },
                          my: 4,
                          fontSize: {
                              xs: "15rem !important"
                          },
                          color: "white"
                      }}
                >
                    <Logo/>
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        p: 2,
                    }}
                >
                    <Button sx={{p: 2, color: "white"}}>
                        <Telegram/>
                    </Button>
                    <Button sx={{p: 2, color: "white"}}>
                        <WhatsApp/>
                    </Button>
                    <Button sx={{p: 2, color: "white"}}>
                        <Instagram/>
                    </Button>
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 2
                    }}
                >
                    <Typography
                        sx={{
                            color: "gold",
                            fontSize: {
                                sm: "1.2rem",
                                md: "1.4rem",
                            }
                        }}
                    >
                        Designed By Alireza Mirzaei
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default FooterContainer;