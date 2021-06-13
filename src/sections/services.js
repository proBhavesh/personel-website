import React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import Image from "components/image";

import icon1 from "assets/icons/service-1-1.svg";
import icon2 from "assets/icons/service-1-2.svg";
import icon3 from "assets/icons/service-1-3.svg";
import icon4 from "assets/icons/service-1-4.svg";

const SERVICES_DATA = [
  {
    icon: icon1,
    title: "Website Development",
    text: `From content strategy and UX to visual design and development, our experts are with you every step of the way  
    Come see first hand how a custom-designed digital experience will drive your 
    nonprofit to another level.`,
  },
  {
    icon: icon2,
    title: "Marketing",
    text: "Your message deserves to be heard, and we can bring it to the widest audience possible with a full suite of services to assist your marketing and communications strategy. From social media to custom email and newsletter templates, Google Ads management, or SEO services, we’re here to help.",
  },
  {
    icon: icon3,
    title: "Adwords",
    text: "Grow your business with Google Ads. Get in front of customers when they're searching for businesses like yours on Google Search and Maps.",
  },
  {
    icon: icon4,
    title: "E-commerce",
    text: "It's time to increase online sales with a professional e-coomerce website with Custom design, development, & integrations",
  },
];

const Services = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          slogan="Services We Offer"
          title="We offer numerous web development services"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, null, null, "140px"],
    ".service-card:nth-of-type(2)": {
      ".service-icon": {
        backgroundImage:
          "linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)",
      },
    },
    ".service-card:nth-of-type(3)": {
      ".service-icon": {
        backgroundImage:
          "linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)",
      },
    },
    ".service-card:nth-of-type(4)": {
      ".service-icon": {
        backgroundImage:
          "linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)",
      },
    },
  },
  blockTitle: {
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridGap: ["30px", null, null, null, null, "60px"],
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      "1fr 1fr",
      null,
      "1fr 1fr",
    ],
  },
  icon: {
    display: "flex",
    ml: "auto",
    mr: "auto",
    width: ["80px", null, null, "110px"],
    height: ["80px", null, null, "110px"],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ["20px", null, null, "40px"],
    backgroundImage:
      "linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)",
  },
  serviceCard: {
    textAlign: "center",
    h3: {
      margin: 0,
      fontSize: ["18px", null, null, 3],
      fontWeight: "bold",
      lineHeight: 1,
      color: "black",
      mt: ["30px", null, null],
      mb: ["20px", null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, "15px"],
      color: "heading_secondary",
      width: "100%",
      maxWidth: [null, null, null, null, "84%", "100%"],
      mx: [null, null, null, null, "auto", "0"],
    },
  },
};
