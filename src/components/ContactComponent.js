import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Flex,
  Button,
} from "theme-ui";

// import * as emailjs from "emailjs-com";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "components/link";
import Image from "components/image";

import img1 from "assets/cta-2-1.png";

const CustomerSupport = () => {
  return (
    <Box as="section" sx={styles.customerSupport}>
      <Container>
        <Grid sx={styles.row}>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">Get a Quote</Heading>
              {/*<Box as="form" action="https://submit-form.com/3lkmJFcr">*/}
              <Box
                as="form"
                action="https://www.formbackend.com/f/0698d758eddc634e"
                method="POST"
                enctype="multipart/form-data"
              >
                <Label htmlFor="email" type="email" required>
                  Email
                </Label>
                <Input name="email" id="email" mb={3} type="email" required />
                <Label htmlFor="website">Website</Label>
                <Input name="website" id="website" mb={3} />
                {/*<Label htmlFor="sound">Sound</Label>*/}
                {/*<Select name="sound" id="sound" mb={3}>
                  <option>Beep</option>
                  <option>Boop</option>
                  <option>Blip</option>
                </Select>*/}
                <Label htmlFor="message">Message</Label>
                <Textarea name="message" id="message" rows={6} mb={3} />
                {/*<label for="my_file">An image</label>*/}
                {/*<input type="file" id="my_files" name="my_files[]" accept="image/*" multiple>*/}
                {/*<Label htmlFor="my_file">Upload files(if any)</Label>*/}
                {/*<Input
                  type="file"
                  id="my_file"
                  name="my_files[]"
                  mb={3}
                  accept="image/*"
                  multiple
                />*/}
                <Button type="submit">Submit</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Image src={img1} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerSupport;

const styles = {
  customerSupport: {
    overflow: "hidden",
    pt: ["75px", null, null, null, "0", "80px"],
    pb: ["75px", null, null, null, null, "120px", "210px"],
    backgroundColor: "#F6F8FB",
  },
  row: {
    display: "grid",
    gridGap: [0, null, null, null, "25px", null, "55px"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
  },
  col: {
    img: {
      maxWidth: ["100%", null, null, "60%", "100%", "none"],
      mx: [null, null, null, "auto", "0"],
      display: [null, null, null, "block"],
      mt: [null, null, null, null, "40px", "0"],
    },
    marginTop: "93px",
  },
  content: {
    pt: [0, null, null, null, "80px", "80px"],
    mb: [null, null, null, "-40px", "0"],
    position: "relative",
    zIndex: 10,
    paddingLeft: ["12px", null, null, null, "0"],
    paddingRight: ["12px", null, null, null, "0", "75px", "0"],
    pb: ["10px"],
    maxWidth: [null, null, null, "590px", null, "100%"],
    width: ["100%"],
    mx: [null, null, null, "auto", null, "0"],
    textAlign: ["center", null, null, null, "left"],
    h3: {
      fontSize: [5, null, "21px", null, 7, "32px", 8],
      maxWidth: [null, null, null, "400px", "none"],
      mx: [null, null, null, "auto", "0"],
      color: "black",
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      lineHeight: [1.5, null, 1.25],
      mb: ["30px", null, null, null, "30px"],
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      "+p": {
        mt: ["15px", null, null, null, "15px"],
      },
    },
  },
};
