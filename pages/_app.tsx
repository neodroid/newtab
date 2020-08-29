import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Footer from "./component/footer";
import { Global, css } from "@emotion/core";
import theme from '../theme';
import { motion } from 'framer-motion';






function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset /> 
     
      <Global
          styles={css`
            @font-face {
              
              
              {
                font-family: 'Montserrat';
                src: url('/fonts/Montserrat-Regular.ttf');
              }
              

            }
            @font-face {
              {
                font-family: 'Montserrat-Bold';
                src: url('/fonts/Montserrat-Bold.ttf');
              }
              
            
              

            }
          `}
        />
     <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
 
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1
  },
}}>
  <Component {...pageProps} />
</motion.div>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;

