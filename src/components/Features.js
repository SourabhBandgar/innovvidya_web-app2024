import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion"; // Import framer-motion for animation
import {
  WarningAmber,
  School,
  AttachMoney,
  AccessibilityNew,
  PhoneIphone,
  Group,
} from "@mui/icons-material"; // Import icons from Material UI
import "./Features.css"; // Import custom styles

const Features = () => {
  const features = [
    {
      title: "AI-Driven Early Warning System",
      description:
        "Our AI-powered solution tracks attendance, grades, and behavior to predict dropout risks and provides insights to prevent student disengagement.",
      color: "#e74c3c",
      icon: <WarningAmber fontSize="large" />,
    },
    {
      title: "Personalized Learning Paths",
      description:
        "Each student’s learning journey is tailored based on their progress and interests, ensuring a personalized and motivating learning experience.",
      color: "#f39c12",
      icon: <School fontSize="large" />,
    },
    {
      title: "Scholarship and Financial Aid Management",
      description:
        "Simplified financial aid discovery and application process with AI-driven assistance to ensure students get the support they need.",
      color: "#27ae60",
      icon: <AttachMoney fontSize="large" />,
    },
    {
      title: "Virtual Mentoring and Counseling",
      description:
        "On-demand access to virtual mentors and emotional counselors to support students’ academic and personal development.",
      color: "#8e44ad",
      icon: <AccessibilityNew fontSize="large" />,
    },
    {
      title: "Mobile Accessibility",
      description:
        "The platform is fully mobile-friendly, enabling students to access educational resources, mentors, and tools on any device, anywhere.",
      color: "#2980b9",
      icon: <PhoneIphone fontSize="large" />,
    },
    {
      title: "Parental Engagement",
      description:
        "A dedicated portal allows parents to stay informed about their child’s academic progress and access resources to support learning.",
      color: "#e67e22",
      icon: <Group fontSize="large" />,
    },
  ];

  return (
    <section className="features" id="features">
      <div
        className="features-section"
        style={{ padding: "80px 20px", backgroundColor: "#fff" }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          className="features-heading"
        >
          Our Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  className="feature-box"
                  sx={{
                    background: `linear-gradient(135deg, ${feature.color} 0%, #fff 100%)`,
                    color: "black",
                    padding: "30px",
                    borderRadius: "12px",
                    textAlign: "center",
                    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
                    minHeight: "250px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <div className="icon-container">{feature.icon}</div>
                  <Typography
                    variant="h6"
                    className="feature-title"
                    gutterBottom
                    style={{
                      color: feature.color,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="feature-description">
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Features;
