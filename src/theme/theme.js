import {createTheme} from "@mui/material";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {grey} from "@mui/material/colors";

// Create light theme
export const lightTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: "Vazir",
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                style: {
                    position: "fixed",
                    backgroundColor: "transparent"
                }
            }
        },
        MuiToolbar: {
            defaultProps: {
                style: {
                    minHeight: "0",
                    height: {
                        xs: "7vh",
                        sm: "9vh",
                        md: "8vh",
                        lg: "7vh"
                    },
                }
            }
        },
        MuiTab: {
            defaultProps: {
                style: {
                    fontSize: "1.2rem",
                    minHeight: 60,
                },
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    // backgroundColor: "blue"
                }
            }
        },
        MuiCard: {
            defaultProps: {
                style: {
                    backgroundColor: grey[300],
                    boxShadow: "0 0 5px black",
                    borderRadius: "10px"
                }
            }
        }
    }
});

// Create dark theme
export const darkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: "Vazir",
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                style: {
                    position: "fixed",
                    backgroundColor: "transparent"
                }
            }
        },
        MuiToolbar: {
            defaultProps: {
                style: {
                    minHeight: "0",
                    height: {
                        xs: "7vh",
                        sm: "9vh",
                        md: "8vh",
                        lg: "7vh"
                    },
                }
            }
        },
        MuiTab: {
            defaultProps: {
                style: {
                    fontSize: "1.2rem",
                    minHeight: 60,
                },
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    // backgroundColor: "red"
                }
            }
        },
        MuiCard: {
            defaultProps: {
                style: {
                    backgroundColor: grey[300],
                    boxShadow: "0 0 5px black",
                    borderRadius: "10px"
                }
            }
        }
    }
});

// Create rtl cache
export const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});