import Pictures from "../content/Pictures";
import Specification from "../content/specification";
import Description from "../content/Descrips";

const tabProps = (index) => {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`
    }
}

export const tabsDataDetails = () => {
    const tabs = [
        {label: "تصاویر",comp: <Pictures/>, ...tabProps(0)},
        {label: "مشخصات",comp: <Specification/>, ...tabProps(1)},
        {label: "توضیحات",comp: <Description/>, ...tabProps(2)},
    ]

    return tabs;
};