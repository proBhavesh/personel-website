/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";
import { Link } from "components/link";
import Logo from "components/logo";
import {
  FaAngleRight,
  FaTwitterSquare,
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      sx={{
        variant: "layout.footer",
        backgroundColor: "#fff",
      }}
    >
      <Container
        sx={{
          // variant: "layout.toolbar",
          // justifyContent: ["center", null, null, "space-between"],
          // flexDirection: ["column", null, null, null, "row"],
          paddingTop: [30, 40],
          paddingBottom: [30, 65],
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={styles.right}>
            <Link path="https://www.linkedin.com/in/bhaveshchoudhary/">
              <a
                href="https://www.linkedin.com/in/bhaveshchoudhary/"
                target="_blank"
              >
                <FaLinkedin size={35} />
              </a>
            </Link>
            {/*<Link path="">
              {" "}
              <FaFacebookSquare size={35} />
            </Link>*/}
            <Link path="https://twitter.com/yoBhavesh">
              <a href="https://twitter.com/yoBhavesh" target="_blank">
                <FaTwitterSquare size={35} />
              </a>
            </Link>
            {/*<Link path="/">
              {" "}
              <FaGooglePlusSquare size={35} />
            </Link>*/}
            <Link path="https://github.com/proBhavesh">
              <a href="https://github.com/proBhavesh" target="_blank">
                <FaGithubSquare size={35} />
              </a>
            </Link>
          </Box>
          <Box sx={styles.right}>
            <Link path="/" label="Home" />
            <Link path="/" label="Portfolio" />
            <Link path="/" label="Services" />
            <Link path="/contact" label="Contact" />
            <Link path="/" label="FAQ" />
          </Box>
          <Box sx={styles.right}>
            <Link path="/" label="About" />
            <Link path="/" label="Resources" />
            <Link path="/" label="Support" />
            <Link path="/" label="Marketing" />
          </Box>

          <Box sx={styles.left}>
            {/*<Logo />*/}
            <Text as="p" sx={{ textAlign: "center" }}>
              &copy; {new Date().getFullYear()} All right reserved - Design &
              Developed by Bhavesh Choudhary
            </Text>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  left: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: ["column", null, "row"],
    alignItems: "center",
    p: {
      fontSize: [0, 1],
      color: "black",
      opacity: 0.6,
      mt: ["10px", null, "0"],
    },
  },
  right: {
    // display: ["none", null, null, null, "flex"],
    fontSize: 2,
    alignItems: "center",
    color: "black",
    a: {
      transition: "500ms",
      "&:hover": {
        color: "primary",
      },
    },
    "a+a": {
      marginLeft: "30px",
    },
  },
};
