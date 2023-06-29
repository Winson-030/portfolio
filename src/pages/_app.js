import Theme from "@/styles/theme";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Theme>
                <Component {...pageProps}/>
        </Theme>
        </>
    )
}

export default App;