import {Link} from "react-router-dom";

import {Instagram, Telegram, WhatsApp} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

const SocialLinks = () => {
    return (
        <Grid md={2} lg={1}
              sx={{
                  height: {
                      md: "8vh",
                      lg: "7vh"
                  },
                  display: {
                      xs: "none",
                      md: "flex"
                  },
                  justifyContent: "space-around",
                  alignItems: "center",
              }}
        >
            <Link to={"/"} style={{color: "white"}}>
                <Telegram/>
            </Link>
            <Link to={"/"} style={{color: "white"}}>
                <WhatsApp/>
            </Link>
            <Link to={"/"} style={{color: "white"}}>
                <Instagram/>
            </Link>
        </Grid>
    )
}

export default SocialLinks;