import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import ContactComponent from "components/ContactComponent";
const contact = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StickyProvider>
          <Layout>
            <SEO title="Get a Quote" />
            <ContactComponent />
          </Layout>
        </StickyProvider>
      </ThemeProvider>
    </>
  );
};

export default contact;
