import { Route } from "react-router-dom"

export function BuildRouter(Routes){
        return Routes.map((route)=>{
            return(

                <Route path={route.path} Component={route.component}/>

            )
            })



}