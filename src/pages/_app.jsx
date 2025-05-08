import { Fragment } from "react";

import "@/styles/scss/main.scss";
import Layout from "@/components/layout";


function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default App;
