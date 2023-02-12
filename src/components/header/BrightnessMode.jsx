import {DarkModeRounded, LightModeRounded} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import {Button} from "@mui/material";
import {useTheme} from "@mui/material/styles";


const BrightnessMode = ({handleThemeChange}) => {

    const theme = useTheme();

    return (
        <Grid xs={2} sm={1} md={1}
              sx={{
                  height: {
                      xs: "7vh",
                      sm: "9vh",
                      md: "8vh",
                      lg: "7vh"
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
              }}
        >
            <Button
                sx={{color: "white"}}
                onClick={handleThemeChange}
            >
                {theme.palette.mode === "light" ? <DarkModeRounded/> : <LightModeRounded/>}
            </Button>
        </Grid>
    )
}

export default BrightnessMode;