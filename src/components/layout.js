import React from 'react';
import { css, Global } from '@emotion/react'
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Header from './header';

const Layout = ({ children }) => {

    const { title, description } = useSiteMetadata();

    return (
    <>
        <Global
            styles={css`
                * {
                    box-sizing: border-box;
                    margin: 0;
                }
                /* normalizes vertical spacing */
                * + * { 
                    margin-top: 1rem;
                }

                html,
                body {
                    margin: 0;
                    color: #555;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    line-height: 1.4;
                    /* remove margin for main div that gatsby mounts into */
                    > div {
                        margin-top: 0;
                    }
                }
                h1, 
                h2,
                h3, 
                h4,
                h5, 
                h6 {
                    color: #222;
                    line-height:1.1;
                    + * {
                        margin-top: 0.5rem;
                    }
                }
                strong {
                    color: #222;
                }

                li {
                    margin-top: 0.25rem;
                }
            `}
         />
         <Helmet>
             <html lang="en" />
             <title> {title} </title>
             <meta name="description" content={description} />
         </Helmet>
         <Header />
         <main 
            css={css`
                margin: 2em auto 4rem;
                max-width: 90vw;
                width: 550px;
            `}
        >        
            {children}
        </main>
    </>
);
}

export default Layout;