import Grid from "@mui/material/Unstable_Grid2";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const MostVisited = () => {

    const navigate = useNavigate();
    const products = useSelector(state => state.products)

    return (
        <Grid sx={{mx: "auto"}}>
            <Typography
                sx={{
                    fontSize: {
                        xs: "1.6rem",
                        sm: "1.8rem",
                        md: "2rem",
                        lg: "2.3rem",
                        xl: "2.6rem"
                    },
                    textAlign: "center",
                    py: 2
                }}
            >
                پرطرفدارترین ها
            </Typography>
            <Grid container
                  sx={{
                      justifyContent: "center",
                  }}
            >
                <Grid xs={12} sm={6} md={6} lg={4} xl={4}
                      sx={{p: 2}}>
                    <Card>
                        <CardActionArea
                            onClick={() => {
                                navigate(`/products/${products[0].id}`);
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
                                    {products[0].title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {products[0].content.substring(0, 200)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={4} xl={4}
                      sx={{p: 2}}>
                    <Card>
                        <CardActionArea
                            onClick={() => {
                                navigate(`/products/${products[1].id}`);
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
                                    {products[1].title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {products[1].content.substring(0, 200)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={4} xl={4}
                      sx={{p: 2}}>
                    <Card>
                        <CardActionArea
                            onClick={() => {
                                navigate(`/products/${products[2].id}`);
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
                                    {products[2].title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {products[2].content.substring(0, 200)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MostVisited;