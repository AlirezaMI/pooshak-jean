import Grid from "@mui/material/Unstable_Grid2";
import {Tab, Tabs, useMediaQuery} from "@mui/material";
import {tabsDataDetails} from "./data/tabsDataDetails";
import {useTheme} from "@mui/material/styles";
import {useEffect} from "react";

const TabsDetails = ({value, handleChange}) => {

    const data = tabsDataDetails();

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        if (isMdUp) {
            handleChange(event, 1)
        } else {
            handleChange(event, 0)
        }
    }, [isMdUp]);

    return (
        <Grid>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
            >
                {
                    data.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            {...tab}
                            sx={{
                                display: {
                                    md: `${index === 0 ? "none" : "block"}`
                                }
                            }}
                        />)
                    )
                }
            </Tabs>
        </Grid>
    )
}

export default TabsDetails;