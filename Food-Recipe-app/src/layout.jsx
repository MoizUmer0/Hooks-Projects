import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { UserContextProvider } from "./components/context/UserContext/userContext";

export function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
           
        </>
    )
}