import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors";
import HeaderDetails from "./productDetails/HeaderDetails";
import TabsDetails from "./productDetails/TabsDetails";
import {useState} from "react";
import ContentDetails from "./productDetails/ContentDetailes";
import TabPanelDetails from "./productDetails/content/TabPanelDetails";
import {tabsDataDetails} from "./productDetails/data/tabsDataDetails";

const ProductDetails = () => {

    const data = tabsDataDetails();

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const {productId} = useParams();
    const product = useSelector(state =>
        state.products.find(product =>
            product.id === productId
        ))

    if (!product) {
        return (
            <section>
                <h2>پستی وجود ندارد</h2>
            </section>
        )
    }

    return (
        <Grid container sx={{mt: "8vh"}}>
            <Grid xs={11} sm={11} md={11} lg={11} xl={10}
                  sx={{
                      borderRadius: "10px",
                      boxShadow: `0 0 10px ${grey[700]}`,
                      mx: "auto",
                      my: {
                          xs: "3vh",
                          sm: "3vh",
                          md: "6vh",
                          lg: "6vh",
                          xl: "6vh"
                      },
                      height: {
                          xs: "86vh",
                          sm: "86vh",
                          md: "80vh",
                          lg: "80vh",
                          xl: "80vh"
                      }
                  }}
            >
                <HeaderDetails product={product}/>
                <TabsDetails value={value} handleChange={handleChange}/>
                <ContentDetails>
                    {data.map((tab, index) => (
                        <TabPanelDetails value={value} index={index}>
                            {tab.comp}
                        </TabPanelDetails>)
                    )}
                </ContentDetails>
            </Grid>
        </Grid>
    )
}

export default ProductDetails;