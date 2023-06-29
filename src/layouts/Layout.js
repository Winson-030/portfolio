import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Container } from "./LayoutStyles";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['greek'] })

const Layout = ({ children }) => {

    return (
        <Container>
            <Header />
            <main className={inter.className}>{children}</main>
            <Footer />
        </Container>
    )

}



export default Layout;