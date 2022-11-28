import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e09ayin', 'template_c7iy1ko', form.current, 'BgO3BxW240MnYvru3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
        <section className="">
          <Container className="self-center" maxWidth='lg'>
            <Grid container spacing={4}>
              <Grid className="square padding-2" xs={12} xl={4} sm={12}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <LocalPhoneOutlinedIcon />
                  <h1 style={{color: 'white'}}>07.69.61.17.60</h1>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <EmailOutlinedIcon />
                  <h1 style={{color: 'white'}}>yannis.alouache@gmail.com</h1>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <FmdGoodOutlinedIcon />
                  <h1 style={{color: 'white'}}>Lille</h1>
                </Box>
              </Grid>
              {/* <Grid xs={12} xl={9} sm={12}>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
              </Grid> */}
            </Grid>
          </Container>
        </section>
    </>
  )
}

export default ContactMe