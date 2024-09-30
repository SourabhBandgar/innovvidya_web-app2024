import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div
        className="about-us-section"
        style={{ padding: "60px 20px", backgroundColor: "#fff" }}
      >
        {/* About Us Heading */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          className="about-us-heading"
        >
          About InnovVidya
        </Typography>

        {/* Accordion Sections */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="mission-content"
            id="mission-header"
          >
            <Typography variant="h5" className="about-us-subheading">
              Our Mission
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" className="about-us-description">
              At InnovVidya, we aim to transform education by leveraging
              advanced technologies like AI, machine learning, and predictive
              analytics to significantly reduce dropout rates. Our platform
              ensures that every student, regardless of socio-economic
              background, has access to quality, personalized education.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="vision-content"
            id="vision-header"
          >
            <Typography variant="h5" className="about-us-subheading">
              Our Vision
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" className="about-us-description">
              We envision a future where dropout rates are dramatically
              minimized, with students excelling academically and personally.
              Through innovative learning pathways, early interventions, and
              practical skill development via our unique freelance platforms,
              InnovVidya strives to create a supportive educational ecosystem
              that empowers students to succeed.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="what-we-do-content"
            id="what-we-do-header"
          >
            <Typography variant="h5" className="about-us-subheading">
              What We Do
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" className="about-us-description">
              InnovVidya combines cutting-edge technology with a deep
              understanding of education to tackle the most pressing challenges.
              Our AI-Driven Early Warning System, personalized learning modules,
              and financial aid management tools help students stay engaged and
              complete their education.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* YouTube Video Section */}
        <Box mt={5} className="video-container" style={{ textAlign: "center" }}>
          <Typography variant="h5" className="about-us-subheading" gutterBottom>
            Our Solutions Video
          </Typography>
          <Box
            component="div"
            sx={{
              position: "relative",
              paddingBottom: "56.25%", // 16:9 aspect ratio
              height: 0,
              overflow: "hidden",
              maxWidth: "80%",
              margin: "0 auto",
              backgroundColor: "#000", // Placeholder background while the video loads
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/tuMrPEjZRF0" // Replace YOUR_VIDEO_ID
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="InnovVidya Solutions"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default AboutUs;
