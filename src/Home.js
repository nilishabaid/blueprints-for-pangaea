import React from 'react';
import Header from './Header.js';
import Flip from './Flip.js'
import './Home.css'
import Footer from './Footer.js'

const Home = () => {
  return (
    <div>
      <Header></Header>
      
      <div class="landing">
        <div class="imagePlaceholder"></div>
        <div class="landingHeader">Eliminate Medical Resource Inefficiencies</div>
        <div class="landingText">Donate to contribute to this cause.</div>
      </div>

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
      
      <div class="firstParBox">
        <p class="parHeader"  style={{width: 155}}>About Us</p>
        <p class="parText" style={{height: 128, left: 38, top: 96}}>
        Blueprints For Pangaea (B4P) is a 501(c)(3) not-for-profit medical surplus recovery organization (MSRO)
        that addresses global healthcare inequalities by redistributing 
        surplus medical supplies from the US to hospitals overseas. 
        We reduce expenses and environmental footprints, while enabling affordable, 
        high-quality patient care.</p>
        <p class="learnMore" style={{left: 892, top: 257}}>Learn More</p>
        <hr class="underLine" style={{left: 892, top: 279}}></hr>
        <p class="arrowOne">&#8594;</p>
      </div>

      <div class="secondParBox">
        <p class="parHeader"  style={{width: 202}}>Our Mission</p>
        <p class="parText" style={{height: 96, left: 59, top: 109}}>Our mission is to reallocate unused medical 
        supplies from areas of excess to areas in need. By collecting and shipping supplies abroad, 
        we’re changing the fate of these precious medical resources and lives.</p>
        <p class="learnMore" style={{left: 901, top: 240}}>Learn More</p>
        <hr class="underLine" style={{left: 901, top: 262}}></hr>
        <p class="arrowTwo">&#8594;</p>
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
