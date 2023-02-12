import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

import {store} from "./store/store";
import {router} from "./routes";

// React-Slick Css Files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
)
