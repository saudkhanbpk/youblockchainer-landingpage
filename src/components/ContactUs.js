import React, { useState } from "react";
import { Container, Typography, Grid, TextField, Button, Paper, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: ""
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_0dpnt9l', 'template_ncvr0ws', e.target, 'Db5QHlCoFSat_5E-C')
      .then((result) => {
        console.log(result.text);
        setSubmitMessage("Submit Successful");
      }, (error) => {
        console.log(error.text);
        setSubmitMessage("Submit Failed. Please try again later.");
      });
    
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="container-fluid form-container" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="form-card">
          <Grid container className="covero">
            <Grid item xs={12} md={5} className="addresscol" style={{ backgroundColor: "rgba(0, 0, 0, 0.418)", backdropFilter: 'blur(20px)', padding: "2rem" }}>
              <div className="address-cover">
                <Typography variant="h2" gutterBottom style={{ color: "#ffffff", fontFamily: "600", }}>Get in Touch</Typography>
                <Typography variant="h4" paragraph style={{ color: "#ffffff", paddingTop: '20px', fontWeight: '700', }}>Become a MyreelDrem Insider !</Typography>
                <address style={{ color: "#ffffff" }}>
                  4930 Alaska Hwy, Fort Nelson <br />
                  British Columbia, V0C 1C0
                </address>
                <div style={{ color: "#ffffff", display: "flex", alignItems: "center", marginTop: "10px" }}>
                  <EmailIcon />&nbsp;    support@smarteyeapps.com
                </div>
                <div style={{ color: "#ffffff", display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
                  <PhoneIcon />&nbsp;  +1 (344) 132-3434-34
                </div>
                <Typography variant="h4" paragraph style={{ color: "#ffffff", paddingTop: '20px', fontWeight: '700', }}>Follow</Typography>
                <div style={{ marginTop: "1rem",  }}>
                  <IconButton href="https://www.facebook.com">
                    <FacebookIcon style={{ color: "#ffffff", fontSize: '40px', marginRight: '20px',}} />
                  </IconButton>
                  <IconButton href="https://twitter.com">
                    <TwitterIcon style={{ color: "#ffffff" , fontSize: '40px', marginRight: '20px',}} />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com">
                    <LinkedInIcon style={{ color: "#ffffff", fontSize: '40px', marginRight: '20px', }} />
                  </IconButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7} className="formcol">
              <form onSubmit={handleSubmit}>
                <Paper className="form-cover" style={{ padding: "2rem" }}>
                  <div className="form-row row" style={{ marginBottom: "1rem" }}>
                    <TextField label="Enter Full Name" required fullWidth name="fullName" value={formData.fullName} onChange={handleChange} />
                  </div>
                  <div className="form-row row" style={{ marginBottom: "1rem" }}>
                    <TextField label="Enter Mobile Number" fullWidth name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                  </div>
                  <div className="form-row row" style={{ marginBottom: "1rem" }}>
                    <TextField label="Enter Email Address" required fullWidth type="email" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-row row" style={{ marginBottom: "1rem" }}>
                    <TextField label="Enter Subject" fullWidth name="subject" value={formData.subject} onChange={handleChange} />
                  </div>
                  <div className="form-row row" style={{ marginBottom: "1rem" }}>
                    <TextField label="Enter Your Message" required multiline rows={4} fullWidth name="message" value={formData.message} onChange={handleChange} />
                  </div>
                  <div className="form-row row mb-0" style={{ marginBottom: "1rem" }}>
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                    {submitMessage && <div style={{color:'green', padding:'20px'}} className="submit-message ">{submitMessage}</div>}
                  </div>
                </Paper>
              </form>
             
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactUs;
