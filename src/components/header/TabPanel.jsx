import {Typography} from "@mui/material";

const TabPanel = (props) => {

    const {children, value, index, ...others} = props;

    return (
        <div
            role={"tabpanel"}
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-label={`menuBox-tab-${index}`}
            {...others}
        >
            {value === index && (
                    children
            )}
        </div>
    )
}

export default TabPanel;