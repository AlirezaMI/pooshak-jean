import {useSelector} from "react-redux";

import Grid from "@mui/material/Unstable_Grid2";
import {useNavigate} from "react-router-dom";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import {ShareRounded, VisibilityRounded} from "@mui/icons-material";

const Products = () => {

    const navigate = useNavigate();
    const products = useSelector(state => state.products)

    return (
        <Grid container xs={12} xl={10}
              sx={{
                  mx: "auto",
              }}
        >
            {
                products.map((product, index) => (
                    <Grid xs={12} sm={6} md={6} lg={4} xl={4}
                          key={index}
                          sx={{p: 2}}
                    >
                        <Card>
                            <CardActionArea
                                onClick={() => {
                                    navigate(`/products/${product.id}`);
                                }}
                            >
                                <CardMedia
                                    sx={{
                                        height: {
                                            xs: 230,
                                            sm: 250,
                                            md: 350,
                                            lg: 300,
                                            xl: 320
                                        }
                                    }}
                                    component="img"
                                    image=""
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.content.substring(0, 200)}
                                    </Typography>
                                </CardContent>
                           </CardActionArea>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <VisibilityRounded/>
                                    &nbsp;
                                    {product.visibility}
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareRounded/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Products;