import Grid from "@mui/material/Unstable_Grid2";
import {Box, Button, IconButton, Toolbar} from "@mui/material";
import {MenuRounded} from "@mui/icons-material";

const DrawerMenuButton = ({setDrawerOpenMenu}) => {
    return (
        <Grid xs={2} sm={1}
              sx={{
                  height: {
                      xs: "7vh",
                      sm: "9vh",
                  },
                  display: {
                      xs: "flex",
                      md: "none"
                  },
                  justifyContent: "center",
                  alignItems: "center",
              }}
              onClick={() => setDrawerOpenMenu(true)}
        >
                <Button>
                    <MenuRounded sx={{color: "white"}}/>
                </Button>
        </Grid>
    )
}

export default DrawerMenuButton;