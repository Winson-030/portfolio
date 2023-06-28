import React from "react";

import { Container } from "./LayoutStyles";

const Layout = ({ children }) => (
    <Container>
        <main>{children}</main>
    </Container>
);

export default Layout;