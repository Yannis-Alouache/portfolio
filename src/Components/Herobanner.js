
import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system'
import image from "../Assets/Images/macbook.png"
import wave from "../Assets/Images/wave.svg"

function Herobanner() {
  const words = ["Hi. I'm Yannis.", "I turn ideas into real life products."]
  const title = document.getElementsByClassName("title")
  const len = words.length;
  const speed = 75;
  const skip_delay = 15;

  let skip_count = 0;
  let forwards = true;
  let offset = 0;
  let i = 0;
  let part;


  function animateTitle() {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      title[0].innerHTML = part
    }, speed);
  }

  useEffect(() => {
    animateTitle()
  }, [animateTitle])

  return (
    <>
      <section className="flex landing">
        <Container className="self-center" maxWidth='xl'>
          <Grid container spacing={4} style={{paddingRight: "20px"}}>
              <Grid item className='text-centerv' xs={12} xl={6} sm={12}>
                <div>
                  <div className='title'></div>
                  <p className='subtitle'>I'm also a fullstack developer building web application centered around user experience.</p>
                </div>
              </Grid>
              <Grid item xs={12} xl={6} sm={12}>
                <div className='wrapper'>
                  <img className="wave" alt="wave" src={wave}/>
                  <img className='center-img relative animate__animated animate__bounceInDown animate__slow' alt='pc' src={image} />
                </div>
              </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Herobanner