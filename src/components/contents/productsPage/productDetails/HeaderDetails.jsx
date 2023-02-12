import Grid from "@mui/material/Unstable_Grid2";
import {IconButton} from "@mui/material";
import {ArrowBackRounded, VisibilityRounded} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";

const HeaderDetails = ({product}) => {

    const navigate = useNavigate();

    return (
        <Grid
            sx={{
                height: "10%",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: grey[300],
                borderBottom: `1px solid ${grey[900]}`
            }}>
            <Grid xs={3} sm={3} md={2} lg={2} xl={1}
                  sx={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center"
                  }}>
                <IconButton aria-label="add to favorites">
                    {product.visibility}
                    &nbsp;
                    <VisibilityRounded/>
                </IconButton>
            </Grid>
            <Grid xs={2} sm={2} md={1}
                sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
                  onClick={() => navigate("/products")}
            >
                <IconButton>
                    <ArrowBackRounded/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default HeaderDetails;