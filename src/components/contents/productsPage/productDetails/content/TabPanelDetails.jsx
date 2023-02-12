import {Box} from "@mui/material";

const TabPanelDetails = (props) => {

    const {children, value, index, ...other} = props

    return (
        <Box
            component={"div"}
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </Box>
    )
}

export default TabPanelDetails;