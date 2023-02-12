import {Avatar, Box, Stack, Typography} from "@mui/material";

import bgAbout from "../../assets/about-background.jpg";
import meshkini from "../../assets/meshkini.png";
import {grey} from "@mui/material/colors";

import person1 from "../../assets/abstract01.jpg";
import person2 from "../../assets/abstract02.jpg";
import person3 from "../../assets/abstract03.jpg";
import person4 from "../../assets/abstract04.jpg";

const AboutPage = () => {
    return (
        <>
            <Box component={"div"} sx={{
                display: {
                    md: "flex"
                },
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: grey[300],
                px: {
                    xs: 2,
                    xl: 30
                },
                pt: 10,
                pb: 5
            }}
            >
                <Box sx={{
                    width: "300px",
                    height: "300px",
                    display: "flex",
                }}>
                    <img src={meshkini} alt=""/>
                </Box>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquam aspernatur autem
                    dolor eos error ex id illum ipsam, iusto laborum magni nam nihil nostrum quia quo repellendus,
                    sapiente voluptatem voluptatum. Atque, culpa dolor dolorem ipsam molestiae odio
                    quae!</Typography>
            </Box>
            <Box component={"div"} sx={{
                backgroundImage: `url(${bgAbout})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 20
            }}>
                <Typography sx={{color: "white"}} variant={"h4"}>dasfgdfgasdfsad</Typography>
            </Box>
            <Box component={"div"} sx={{
                px: {
                    xs: 2,
                    md: 10,
                    lg: 20,
                    xl: 50
                },
                backgroundColor: grey[900]
            }}>
                <Box sx={{
                    display: {
                        md: "flex"
                    }
                }}>
                    <Typography sx={{
                        width: {
                            md: "30%"
                        },
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        fontSize: {
                            xs: "2rem",
                            sm: "4rem",
                            md: "5rem",
                            xl: "8rem"
                        },
                        p: 6,
                    }}>
                        کارگاه پوشاک جین
                    </Typography>
                    <Box sx={{
                        backgroundColor: "blue",
                        width: {
                            md: "70%"
                        }
                    }}>
                        فیلم کارگاه
                    </Box>
                </Box>
            </Box>
            <Typography sx={{textAlign: 'center', py: 2}} variant={"h4"}>پرسنل</Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                pb: 3
            }}>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{width: 80, height: 80, m: 1}}
                />
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{width: 80, height: 80, m: 1}}
                />
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{width: 80, height: 80, m: 1}}
                />
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{width: 80, height: 80, m: 1}}
                />
            </Box>
        </>
    )
}

export default AboutPage;