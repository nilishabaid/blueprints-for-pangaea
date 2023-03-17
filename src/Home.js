import React from 'react';
import Header from './Header.js';
import Flip from './Flip.js'
import './Home.css'
import Footer from './Footer.js'

const Home = () => {
  return (
    <div>
      <Header></Header>

      <div class="statbox">
        <div class="statcol" style={{order:0}}>
          <div class="stathead">
            $4 million
          </div>
          <div class="stattext">
            unused medical supplies reallocated
          </div>
        </div>
        <div class="statcol" style={{order:1}}>
          <div class="stathead">
            X Pounds
          </div>
          <div class="stattext">
            medical waste generated every year
          </div>
        </div>
        <div class="statcol" style={{order:2}}>
          <div class="stathead">
            $200,000
          </div>
          <div class="stattext">
            donated since 2014
          </div>
        </div>
      </div>
      
      <div class="flipBox">
        <p class="flipBoxHead">Our three core principles</p>
        <Flip fheader="SURPLUS" bheader="SURPLUS" flipurl='./homeflip1.png' flipleft={0} fliptop={183} btext="The US medical system throws away millions of pounds of completely unused medical supplies each year, contributing to a massive inefficiency."></Flip>
        <Flip fheader="REDIRECTION" bheader="REDIRECTION" flipurl='./homeflip2.png' flipleft={370} fliptop={183} btext="We work with hospitals and medical suppliers in the US to redirect these supplies from landfills to hospitals and clinics in need."></Flip>
        <Flip fheader="IMPACT" bheader="IMPACT" flipurl='homeflip3.png' flipleft={740} fliptop={183} btext="For every dollar we receive, there is a tremendous social impact. Each $1 we spend can ship up to $50 of medical supplies and make a difference in hundreds of lives."></Flip>
      </div>
      <Footer></Footer>
    </div>
  );
}
  
export default Home;
