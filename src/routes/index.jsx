import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ProductDetails from "../components/contents/productsPage/ProductDetails";
import ProductsPage from "../components/contents/ProductsPage";
import HomePage from "../components/contents/HomePage";
import AboutPage from "../components/contents/AboutPage";
import ContactUs from "../components/contents/ContactUs";
import Pictures from "../components/contents/productsPage/productDetails/content/Pictures";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <h3>چیزی پیدا نکردیم</h3>, //اینجا میتونی یه کامپوننت 404 بسازی و واردش کنی,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/products",
                element: <ProductsPage/>
            },
            {
              path: "/products/:productId",
              element: <ProductDetails/>
            },
            {
                path: "/products/:productId/pics",
                element: <Pictures/>
            },
            {
                path: "/about-us",
                element: <AboutPage/>
            },
            {
                path: "/contact-us",
                element: <ContactUs/>
            },
        ]
    },
])