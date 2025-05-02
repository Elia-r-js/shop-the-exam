import contact from "../Pages/contact/contact";
import Info from "../Pages/Info/Info";
import Product from "../Pages/Product/ProductItem/Product";



export const routes = [

        {
            path:"/",
            component:Product
        },
        {
            path:"/contact",
            component:contact
        },
        {
            path:"/Info",
            component:Info
        }

]