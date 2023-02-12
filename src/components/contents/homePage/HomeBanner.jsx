import banner6 from "../../../assets/banner6.jpg";
import banner5 from "../../../assets/banner5.jpg";
import {Box, Typography} from "@mui/material";

const HomeBanner = () => {
    return (
        <Box
            component={"div"}
            sx={{
                position: "relative",
                top: "0",
                left: "0",
                backgroundImage: {
                    xs: `url(${banner6})`,
                    md: `url(${banner5})`
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                width: "100%",
                height: "100vh"
            }}
        >
            <Box component={"div"}
                 sx={{
                     position: "absolute",
                     top: {
                         md: "6vh"
                     },
                     bottom: "0",
                     left: "0",
                     width: {
                         xs: "100%",
                         md: "50%"
                     },
                     height: {
                         xs: "15vh",
                         sm: "0",
                         md: "94vh"
                     },
                     backgroundColor: "black",
                     opacity: "0.5",
                 }}
            />
            <Box component={"div"}
                 sx={{
                     position: "absolute",
                     top: {
                         md: "6vh"
                     },
                     bottom: "0",
                     left: "0",
                     width: {
                         xs: "100%",
                         md: "50%"
                     },
                     color: "white",
                     backgroundColor: "transparent",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center"
                 }}
            >
                <Typography
                    sx={{
                        mx: "auto",
                        fontSize: {
                            xs: "2.8rem",
                            sm: "3.5rem",
                            md: "5rem"
                        }
                    }}
                >
                    پوشاک حین
                </Typography>
                <Typography
                    sx={{
                        mx: "auto",
                        fontSize: {
                            xs: "1.2rem",
                            sm: "1.7rem",
                            md: "2.2rem"
                        }
                    }}
                >
                    برترین تولیدی شلوار جین در ایران
                </Typography>
            </Box>
        </Box>
    )
}

export default HomeBanner;