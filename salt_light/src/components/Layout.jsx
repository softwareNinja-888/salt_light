import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout(){
    return (
       <>
            <Header/>
            <span className="text-6xl">new</span>
            <main>
                <Outlet/>
            </main>
            <Footer/>
       </>

    )
}