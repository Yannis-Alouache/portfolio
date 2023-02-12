import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Box, Container } from '@mui/system';
import { Grid, Link, TextField, Typography, Button } from '@mui/material';

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
        <section className='contact'>
          <Container maxWidth="lg">
            <Grid container spacing={10}>
              <Grid item xl={5}>
                <Typography variant="h3">
                  Get in Touch
                </Typography>
                <p>
                 Thank you for taking the time to visit my portfolio. <br></br> If you have any questions or would like to know more about my projects or my background, please feel free to contact me by filling out the form on the right. <br></br> I will be happy to answer you as soon as possible.
                </p>
                <p className='mt30'>Don't like forms ?</p>
                <p> 
                  Email me at &nbsp;
                  <Link href="mailto:yannisalouache@gmail.com">yannisalouache@gmail.com</Link>
                </p>
              </Grid>
              <Grid item xl={7}>
                <Box autoComplete="off">
                  <form ref={form}>
                    <TextField id="standard-basic" required className='input' sx={{width: "45%", marginRight: "10%"}} name="lastName" margin="dense" label="Last Name" variant="standard" />
                    <TextField id="standard-basic" required className='input' sx={{width: "45%"}} name="firstName" margin="dense" label="First Name" variant="standard" />
                    <TextField id="standard-basic" required className='input' sx={{width: "45%", marginRight: "10%"}} name="mail" margin="dense" label="E-mail" variant="standard" />
                    <TextField id="standard-basic" required className='input' sx={{width: "45%"}} name="phone" margin="dense" label="Phone Number" variant="standard" />
                    <TextField id="standard-basic" required className='input' sx={{width: "100%"}} name='message' margin="dense" label="Message" variant="standard" multiline rows={5} />
                    <Button className='sendButton' onClick={sendEmail}>Envoyer</Button>
                  </form>
                </Box>
                
              </Grid>
            </Grid>
          </Container>
        </section>
    </>
  )
}

export default ContactMe