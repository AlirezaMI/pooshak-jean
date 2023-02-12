import Grid from "@mui/material/Unstable_Grid2";
import {Box, TextField, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const ContactUs = () => {
    return (
        <Grid container sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mt: 10,
            mb: 2,
        }}>
            <Grid xs={12} sm={10} md={6} lg={5} xl={4}
                  sx={{
                      backgroundColor: grey[300],
                      p: 4
                  }}
            >
                <Typography variant={"h4"} sx={{pb: 2}}>راه های ارتباط با ما</Typography>
                <Typography variant={"h5"} sx={{py: 1}}>آدرس :</Typography>
                <Typography>کیلومتر 30 بزرگراه تهران-ساره هرجا دوست داشتی بزن بغل</Typography>
                <Typography variant={"h5"} sx={{pt: 3, pb: 1}}>تماس :</Typography>
                <Typography>تلفن ثابت : 02188256484</Typography>
                <Typography>تلفن همراه : 02188256484</Typography>
                <Typography>فکس : 02188256484</Typography>
                <Typography>دور نگار : 02188256484</Typography>
                <Typography>نزدیک نگار : 02188256484</Typography>
            </Grid>
            <Grid xs={12} sm={10} md={6} lg={5} xl={4}
                  sx={{
                      height: "50vh",
                      backgroundColor: "green",
                  }}
            >

            </Grid>
            <Grid xs={12}
                  sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: grey[300],
                      py: 3
                  }}
            >
                <Typography sx={{py: 5}} variant={"h4"}>عضویت در خبرنامه</Typography>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '90%',
                    }}
                >
                    <TextField fullWidth label="ایمیل" id="email"/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ContactUs;