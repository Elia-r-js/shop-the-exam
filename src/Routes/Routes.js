import contact from "../Pages/contact/contact";
import Info from "../Pages/Info/Info";
import Product from "../Pages/Product/ProductItem/Product";
import AboutMe from "../Pages/Aboutme/Aboutme";



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
        },
        {
            path:"/AboutMe",
            component:AboutMe
        }


]