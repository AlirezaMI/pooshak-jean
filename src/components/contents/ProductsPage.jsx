import Products from "./productsPage/Products";
import Grid from "@mui/material/Unstable_Grid2";
import {Box, MenuItem, TextField} from "@mui/material";

const currencies = [
    {
        value: 'جدیدترین',
        label: 'جدیدترین',
    },
    {
        value: 'پربازدیدترین',
        label: 'پربازدیدترین',
    },
    {
        value: 'پرفروش ترین',
        label: 'پرفروش ترین',
    },
];

const ProductsPage = () => {

    return (
        <Grid container sx={{mt: "9vh"}}>
            <Grid xs={12}
                  sx={{
                      display: "flex",
                      justifyContent: "center",
                      py: 5
                  }}
            >
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="جدیدترین"
                    helperText="دسته بندی بر اساس"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="جستجو" variant="outlined"/></Box>
            </Grid>
            <Products/>
        </Grid>
    )
}

export default ProductsPage;