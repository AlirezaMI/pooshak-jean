import {useState} from "react";
import {
    AppBar,
    Box,
    Drawer,
    Toolbar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DrawerMenuButton from "../components/header/drawers/DrawerMenuButton";
import MenuBox from "../components/header/MenuBox";
import Logo from "../components/header/Logo";
import DrawerMenu from "../components/header/drawers/DrawerMenu";
import SocialLinks from "../components/header/SocialLinks";
import BrightnessMode from "../components/header/BrightnessMode";

const HeaderContainer = ({handleThemeChange}) => {


    const [drawerOpenMenu, setDrawerOpenMenu] = useState(false);

    return (
        <>
            <Box component={"div"}
                 sx={{
                     position: "fixed",
                     width: "100%",
                     height: {
                         xs: "7vh",
                         sm: "9vh",
                         md: "8vh",
                         lg: "7vh"
                     },
                     backgroundColor: "black",
                     zIndex: "1",
                     opacity: "0.5",
                 }}
            />
            <Grid container>
                <AppBar component={"nav"}>
                    <Toolbar>
                        <DrawerMenuButton
                            setDrawerOpenMenu={setDrawerOpenMenu}
                        />
                        <SocialLinks/>
                        <BrightnessMode handleThemeChange={handleThemeChange}/>
                        <MenuBox/>
                        <Grid xs={5} md={2}
                              xsOffset={3} smOffset={5} mdOffset={0} lgOffset={0}
                              sx={{
                                  height: {
                                      xs: "7vh",
                                      sm: "9vh",
                                      md: "8vh",
                                      lg: "7vh"
                                  },
                              }}
                        >
                            <Logo/>
                        </Grid>
                        <Drawer
                            open={drawerOpenMenu}
                            variant={"temporary"}
                            onClose={() => setDrawerOpenMenu(false)}
                            sx={{
                                "& .MuiDrawer-paper": {
                                    width: {
                                        xs: 300,
                                        sm: 450
                                    }
                                },
                                display: {
                                    md: "none"
                                }
                            }}
                        >
                            <DrawerMenu
                                setDrawerOpenMenu={setDrawerOpenMenu}
                            />
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Grid>
        </>
    )
}

export default HeaderContainer;