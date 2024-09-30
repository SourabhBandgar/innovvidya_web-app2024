import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import "./Footer.css"; // Custom CSS for footer styling

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <footer
        className="footer-section"
        style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h6" gutterBottom>
            © 2024 InnovVidya
          </Typography>
          <Box>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              style={{ color: "#fff" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              style={{ color: "#fff" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              style={{ color: "#fff" }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
          <Typography variant="body2" style={{ marginTop: "10px" }}>
            {/* <Link href="/privacy-policy" color="inherit" underline="hover"> */}
            Privacy Policy
            {/* </Link>{" "}
          |{" "} */}
            {/* <Link href="/terms-of-service" color="inherit" underline="hover"> */}
            Terms of Service
            {/* </Link> */}
          </Typography>
        </Box>
      </footer>
    </section>
  );
};

export default Footer;
