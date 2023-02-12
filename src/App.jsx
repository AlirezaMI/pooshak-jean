import {CacheProvider} from "@emotion/react";
import {cacheRtl, lightTheme, darkTheme} from "./theme/theme";
import {ThemeProvider} from "@mui/material/styles";
import {Helmet, HelmetProvider} from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import {useEffect, useState} from "react";
import {useMediaQuery} from "@mui/material";

const App = () => {

    const [mode, setMode] = useState();
    const theme = mode === "light" ? lightTheme : darkTheme;
    const prefsDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        setMode("light")
    }, []);

    const handleThemeChange = () => {
        setMode(prevMode => prevMode === "light" ? "dark" : "light"
        )
    }

    return (
        <>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <HelmetProvider>
                        <Helmet>
                            <title>وبسایت پوشاک</title>
                        </Helmet>
                        <MainLayout handleThemeChange={handleThemeChange}/>
                    </HelmetProvider>
                </ThemeProvider>
            </CacheProvider>
        </>
    )
}

export default App;
