import Grid from "@mui/material/Unstable_Grid2";
import {useNavigate} from "react-router-dom";
import {Tab, Tabs} from "@mui/material";
import {useState} from "react";
import {tabsData} from "./data/tabsData";

const MenuBox = () => {

    const data = tabsData();

    const navigate = useNavigate();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid md={7} xl={8}
              sx={{
                  height: {
                      md: "8vh",
                      lg: "7vh"
                  },
                  display: {
                      xs: "none",
                      md: "flex"
                  }
              }}>
            <Tabs
                value={value}
                onChange={handleChange}
                sx={{height: "100%", mx: 'auto'}}
            >
                {
                    data.map((tab, index) => (
                        <Tab
                            sx={{color: "white"}}
                            key={index}
                            label={tab.label}
                            onClick={() => navigate(tab.url)}
                            {...tab}
                        />)
                    )
                }
            </Tabs>
        </Grid>
    )
}

export default MenuBox;