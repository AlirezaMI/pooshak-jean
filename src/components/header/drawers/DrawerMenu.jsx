import {Box, Tab, Tabs, Typography, useMediaQuery} from "@mui/material";
import {tabsData} from "../data/tabsData";
import {useTheme} from "@mui/material/styles";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Logo from "../Logo";
import DrawerSocialLinks from "./DrawerSocialLinks";
import {grey} from "@mui/material/colors";

const DrawerMenu = ({setDrawerOpenMenu}) => {

    const data = tabsData();

    const navigate = useNavigate();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpenMenu(false);
        }
    }, [isMdUp]);

    return (
        <>
            <Box
                sx={{
                    height: "10vh",
                    mb: 2,
                    boxShadow: `0 0 10px ${grey[500]}`,
                }}
                onClick={() => setDrawerOpenMenu(false)}
            >
                <Logo/>
            </Box>
            <DrawerSocialLinks/>
            <Tabs
                value={value}
                onChange={handleChange}
                orientation={"vertical"}
                sx={{px: "10%", flexGrow: "1"}}
            >
                {
                    data.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            onClick={() => {
                                navigate(tab.url)
                                setDrawerOpenMenu(false)
                            }}
                            {...tab}
                        />
                    ))
                }
            </Tabs>
        </>
    )
}

export default DrawerMenu;