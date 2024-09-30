import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion"; // Import framer-motion
import "./InnovativeSolutions.css"; // Include this for the new styles

const InnovativeSolutions = () => {
  return (
    <section className="innovative-solutions" id="innovative-solutions">
      <div
        className="innovative-solutions-section"
        style={{ padding: "60px 20px", backgroundColor: "#fff" }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          className="innovative-heading"
        >
          Our Innovative Solutions to <span>Reduce Dropout Rates</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* AI-Driven Early Warning System */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                sx={{
                  backgroundColor: "#3b5998",
                  color: "white",
                  padding: "45px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                  height: "400%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  AI-Driven Early Warning System
                </Typography>
                <Typography variant="body1" className="justified-text">
                  Our AI-Driven Warning System uses machine learning to monitor
                  student data in real-time, tracking attendance, grades, and
                  emotional well-being. It identifies students who may be at
                  risk and generates detailed reports each quarter. These
                  reports are shared with educators and district authorities,
                  allowing for proactive support and timely interventions.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Centralized System */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                sx={{
                  backgroundColor: "#f39c12",
                  color: "black",
                  padding: "57px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                  height: "400%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Centralized System
                </Typography>
                <Typography variant="body1" className="justified-text">
                  The Centralized System is a comprehensive platform that brings
                  together all educational modules into one place. It ensures
                  that students, teachers, and educational authorities have
                  seamless access to important data, enhancing collaboration and
                  improving educational outcomes.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Freelance Platforms: Edu-Lance & Freelance Hub */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                sx={{
                  backgroundColor: "#e74c3c",
                  color: "white",
                  padding: "43px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                  height: "400%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Edu-Lance & Freelance Platforms
                </Typography>
                <Typography variant="body1" className="justified-text">
                  Our Freelancing Platform offers students the chance to gain
                  real-world experience while still in school. EduLance connects
                  younger students with educational projects, helping them earn
                  credits and build their portfolios, while older students
                  benefit from local job opportunities, preparing for future
                  careers.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default InnovativeSolutions;
