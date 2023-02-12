import Grid from "@mui/material/Unstable_Grid2";
import {Box} from "@mui/material";

const Pictures = () => {

    return (
        <Grid container>
            <Grid xs={12}
                  sx={{
                      width: "100%",
                      height: "50vh"
                  }}
            >
                <img src="/src/assets/abstract01.jpg" alt=""/>
            </Grid>
            <Grid
                sx={{
                    display: "flex",
                    mx: "auto",
                    py: 3
                }}
            >
                <Box
                    sx={{
                        width: "100px",
                        height: "10vh",
                        mx: 1
                    }}
                ><img src="" alt=""/></Box>
                <Box
                    sx={{
                        width: "100px",
                        height: "10vh",
                        mx: 1
                    }}
                ><img src="" alt=""/></Box>
                <Box
                    sx={{
                        width: "100px",
                        height: "10vh",
                        mx: 1
                    }}
                ><img src="" alt=""/></Box>
                <Box
                    sx={{
                        width: "100px",
                        height: "10vh",
                        mx: 1
                    }}
                ><img src="" alt=""/></Box>
            </Grid>
        </Grid>

    )
}

export default Pictures;