import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Box, Container } from '@mui/system';
import { Grid, Link, TextField, Typography, Button } from '@mui/material';
import { CircularProgress } from '@mui/material';
import linkedinLogo from "../Assets/Images/linkedin-logo.png"

function ContactMe() {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [errorField, setErrorField] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)
    
    //eslint-disable-next-line
    const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const phoneRegex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/

    if (form.current[0].value === "") {
      setMessage("Enter a last name")
      setErrorField("lastName")
      setIsLoading(false)
      return
    }
    if (form.current[1].value === "") {
      setMessage("Enter a first name")
      setErrorField("firstName")
      setIsLoading(false)
      return
    }
    if (!mailRegex.test(form.current[2].value)) {
      setMessage("Enter a valid e-mail")
      setErrorField("mail")
      setIsLoading(false)
      return
    }
    if (!phoneRegex.test(form.current[3].value)) {
        setMessage("Enter a valid phone number")
        setErrorField("phone")
        setIsLoading(false)
        return
    }
    if (form.current[4].value === "") {
      setMessage("Enter a message")
      setErrorField("message")
      setIsLoading(false)
      return
    }

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          setErrorField("")
          setMessage("")
          setIsLoading(false)
          form.current.reset()
      })
      .catch((error) => {
        console.error(error)
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
                <p style={{marginBottom: "15px"}}> 
                  Email me at &nbsp;
                  <Link href="mailto:yannisalouache@gmail.com">yannisalouache@gmail.com</Link>
                </p>

                <Grid container spacing={7}>
                  <Grid item xl={1}>
                    <Link target='_blank' href="https://www.linkedin.com/in/yannis-alouache/">
                      <img style={{width: "32px", height: "32px"}} alt='linkedin' src={linkedinLogo} />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xl={7}>
                <Box autoComplete="off">
                  <form ref={form}>
                    {errorField === "lastName" ? (
                      <TextField error helperText={message} id="standard-basic" required className='input' sx={{width: "45%", marginRight: "10%"}} name="lastName" margin="dense" label="Last Name" variant="standard" />
                    ) : (
                      <TextField id="standard-basic" required className='input' sx={{width: "45%", marginRight: "10%"}} name="lastName" margin="dense" label="Last Name" variant="standard" />
                    )}

                    {errorField === "firstName" ? (
                      <TextField error helperText={message} id="standard-basic" required className='input' sx={{width: "45%"}} name="firstName" margin="dense" label="First Name" variant="standard" />
                    ): (
                      <TextField id="standard-basic" required className='input' sx={{width: "45%"}} name="firstName" margin="dense" label="First Name" variant="standard" />
                    )}

                    {errorField === "mail" ? (
                      <TextField error helperText={message} id="standard-basic" required className='input' sx={{width: "45%", marginRight: "10%"}} name="mail" margin="dense" label="E-mail" variant="standard" />
                    ): (
                      <TextField id="standard-basic" required className='input' sx={{width: "45%", marginRight: "10%"}} name="mail" margin="dense" label="E-mail" variant="standard" />
                    )}

                    {errorField === "phone" ? (
                      <TextField error helperText={message} id="standard-basic" required className='input' sx={{width: "45%"}} name="phone" margin="dense" label="Phone Number" variant="standard" />
                    ): (
                      <TextField id="standard-basic" required className='input' sx={{width: "45%"}} name="phone" margin="dense" label="Phone Number" variant="standard" />
                    )}

                    {errorField === "message" ? (
                      <TextField error helperText={message} id="standard-basic" required className='input' sx={{width: "100%"}} name='message' margin="dense" label="Message" variant="standard" multiline rows={5} />
                    ): (
                      <TextField id="standard-basic" required className='input' sx={{width: "100%"}} name='message' margin="dense" label="Message" variant="standard" multiline rows={5} />
                    )}                    

                    {isLoading ? (
                      <Button className='sendButton' disabled><CircularProgress size={20}/></Button>
                    ) : (
                      <Button className='sendButton' onClick={sendEmail}>SEND</Button>
                    )}
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