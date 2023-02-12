import {Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useNavigate} from "react-router-dom";

const Logo = () => {

    const navigate = useNavigate();

    return (
        <Grid
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                width: "100%",
                height: "100%",
            }}
            onClick={() => {
                navigate("/")
            }}
        >
            <Typography>
                پوشاک جین
            </Typography>
        </Grid>
    )
}

export default Logo;