import Grid from "@mui/material/Unstable_Grid2";
import Pictures from "./content/Pictures";

const ContentDetails = ({children}) => {
    return (
        <Grid container sx={{
            height: "83%",
            display: "flex",
            justifyContent: "center"
        }}>
            <Grid xs={12} md={6}>
                {children}
            </Grid>
            <Grid md={6} sx={{
                display: {xs: "none", md: "block"},
            }}>
                <Pictures/>
            </Grid>
        </Grid>
    )
}

export default ContentDetails;