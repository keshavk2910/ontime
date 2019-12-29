import React from 'react';
import Layout from '../components/Layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Home = () => (
  <Layout>
  <div className="bg-hero">
  <Container fixed className="flex-mid">
  <Grid container spacing={3} alignContent="center" alignItems="center">
  <Grid item xs={12} md={6}>
  <h1 className="heading">The Future of Web Coding is here.</h1>
  <p className="short-paragraph">Kergan delivers low-touch compliance solutions to HR and Education teams in healthcare, freeing you up to do the work that only you can.
  </p>
  <div className="but-hero">
  <a href="#" className="button2 margin-left w-button">GET STARTED</a>
  <a href="#" className="button2 ghost hero w-button">LEARN MORE</a>
  </div>
  </Grid>
  <Grid item xs={12} sm={6}>
  <img src="/hero2.png" width="549"/>
  </Grid>
  </Grid>
  </Container>
  </div>
  <h1>This is HomePage</h1>
  <style jsx>{`
  .bg-hero {
    background-image: url(/bg-hero.jpg);
    background-position: 0px 0px;
    background-size: cover;
    min-height: 100vh;
    overflow: hidden;
    padding-top:100px;
    display:flex;
  }
  h1.heading {
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 52px;
    font-family: Montserrat, sans-serif;
    color: #333;
    line-height: 1.25;
    font-weight: 800;
  }
  .short-paragraph {
    width: 75%;
    margin-right: auto;
    margin-left: 0px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    text-align: left;
    margin-bottom: 10px;
    line-height:1.5;
}
.but-hero{
  margin-top: 40px;
}
.button2 {
  padding: 10px 25px;
  border: 1px solid #096ad0;
  border-radius: 40px;
  background-color: hsla(230.22471910112358, 88.12%, 60.39%, 1.00);
  -webkit-transition: all 400ms ease;
  transition: all 400ms ease;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  color: white;
  line-height: inherit;
  text-decoration: none;
}
.button2.margin-left {
  margin-right: 20px;
  font-weight: 700;
}
.button2.ghost {
  border-style: solid;
  border-width: 1px;
  border-color: hsla(230.22471910112358, 88.12%, 60.39%, 1.00);
  background-color: transparent;
  box-shadow: none;
  color: hsla(230.22471910112358, 88.12%, 60.39%, 1.00);
  font-weight: 700;
}
.button2:hover {
  border: 1px solid #096ad0;
  background-color: hsla(230.22471910112358, 58.87%, 48.68%, 1.00);
  color: #fff;
}
.button2.ghost:hover {
  background-color: hsla(230.22471910112358, 88.12%, 60.39%, 1.00);
  background-image: none;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  color: #fff;
}
  `}</style>
    </Layout>
)

export default Home
