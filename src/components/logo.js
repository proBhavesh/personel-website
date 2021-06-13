/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/logo.svg";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src={logo}
        sx={{ display: "flex", width: "55px", height: "auto" }}
        alt="startup landing logo"
      />
      <span style={{ marginLeft: "10px", marginRight:'10px', fontSize:'1.5rem' }}>Bhavesh</span>
    </Link>
  );
}
