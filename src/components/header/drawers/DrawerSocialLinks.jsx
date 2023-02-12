import {Link} from "react-router-dom";

import {Instagram, Telegram, WhatsApp} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

const DrawerSocialLinks = () => {
    return (
        <Grid
            sx={{
                px: "70px",
                height: "8vh",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            <Link to={"/"}>
                <Telegram/>
            </Link>
            <Link to={"/"}>
                <WhatsApp/>
            </Link>
            <Link to={"/"}>
                <Instagram/>
            </Link>
        </Grid>
    )
}

export default DrawerSocialLinks;