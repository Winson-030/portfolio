import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Container } from "./LayoutStyles";
import { Analytics } from '@vercel/analytics/react';



const Layout = ({ children }) => {

    return (
        <Container>
            <Header />
            <main >{children}
            <Analytics />
            </main>
            <Footer />
        </Container>
    )

}



export default Layout;