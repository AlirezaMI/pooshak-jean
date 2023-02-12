import {Box} from "@mui/material";
import HomeBanner from "./homePage/HomeBanner";
import SectionOne from "./homePage/SectionOne";
import SectionTwo from "./homePage/SectionTwo";
import SectionThree from "./homePage/SectionThree";
import MostVisited from "./homePage/MostVisited";

const HomePage = () => {

    return (
        <>
            <HomeBanner/>
            <Box
                sx={{
                    px: {
                        lg: 10,
                        xl: 20
                    }
                }}
            >
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <MostVisited/>
            </Box>
        </>
    )
}

export default HomePage;