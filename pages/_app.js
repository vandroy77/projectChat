function GlobalStyle() {
    return (
        /*global CSS*/
        <style global jsx>{`
            *{
                margin:0;
                padding:0;
                box-sizing: border-box;
                list-style: none;
            }
            body{
                font-family: 'Open Sans',sans-serif;   
            }
            /*app ajuste altura*/
            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1
            }
            #__next {
                flex: 1
            }
            #__next > * {
                flex: 1
            }

        `}</style>
    );
}
// essa função vai rodar em todas as paginas do projeto

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component{...pageProps} />
        </>
    )
}