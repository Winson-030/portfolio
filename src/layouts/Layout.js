import React from "react";

import { Container } from "./LayoutStyles";

const Layout = ({ children }) => {

    return (
        <Container>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    )

}



export default Layout;