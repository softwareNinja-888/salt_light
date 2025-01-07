import { Outlet } from "react-router";
import { Header } from "../structure/Header";
import { Footer } from "../structure/Footer";

export function Layout(){
    return (
       <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
       </>

    )
}