import { Box, Container } from "@mui/material";
import React from "react";
// import notes from "../assets/notes.png";

const HomeBody = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1>Notes App</h1>
          <p>
            Welcome to our cutting-edge note application, a digital haven for
            capturing, organizing, and elevating your ideas. Our platform is
            meticulously crafted to be the ultimate companion in your journey of
            productivity and creativity. With an emphasis on user-friendly
            design, our note application provides a seamless and intuitive
            interface, ensuring a smooth note-taking experience for users of all
            levels. Embrace the power of customization with a range of features
            that let you tailor your notes to suit your unique style and
            workflow. Create personalized categories, employ color-coded labels,
            and utilize tags to effortlessly navigate through your digital
            workspace. Our collaborative tools enable real-time sharing and
            editing, transforming your notes into dynamic, collaborative hubs
            for teamwork and innovation. Security is our top priority. Benefit
            from biometric authentication and robust encryption, ensuring that
            your sensitive information remains private and secure. With
            automatic cloud backup, your notes are always accessible across
            devices, providing a reliable and efficient solution for your
            on-the-go lifestyle. But we go beyond the basics. Embrace the
            freedom to attach multimedia elements, turning your notes into
            multimedia-rich documents. Whether it's images, audio clips, or
            files, our note application accommodates diverse forms of
            expression, making your digital workspace dynamic and expressive.
            Join us on this journey of efficiency, creativity, and
            collaboration. Your ideas deserve a home, and our note application
            is here to provide it. Welcome to a new era of digital note-taking.
            Welcome to innovation, welcome to Notes App.
          </p>
        </div>
        <div>
          {/* <img src={notes} /> */}
        </div>
      </Box>
    </Container>
  );
};

export default HomeBody;
