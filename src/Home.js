import React from 'react';
import Header from './Header.js';
import Flip from './Flip.js'
import './Home.css'
import Footer from './Footer.js'
import './fonts.css'
import PrimaryButton from './PrimaryButton.js'
import SecondaryButton from './SecondaryButton.js'
import FadeInSection from './FadeIn.js'

function Home(props){
  return (
    <div>
      <Header setCurrentPage={props.setCurrentPage}></Header>
      <div class="landing">
        <img class="imagePlaceholder" src="boxes.jpg" alt=""></img>
        <div class="landingHeader">Eliminate Medical<br></br>Resource Inefficiencies</div>
        <div class="landingText">Donate to contribute to this cause.</div>
        <PrimaryButton text="Donate"></PrimaryButton>
      </div>
      
      <div class="statbox">
        <div class="statcol" style={{order:0}}>
          <FadeInSection>
            <div class="stathead">
              $4 million
            </div>
            <div class="stattext">
              unused medical supplies reallocated
            </div>
          </FadeInSection>
        </div>
        <div class="statcol" style={{order:1}}>
          <FadeInSection>
            <div class="stathead">
              X Pounds
            </div>
            <div class="stattext">
              medical waste generated every year
            </div>
          </FadeInSection>
        </div>
        <div class="statcol" style={{order:2}}>
          <FadeInSection>
            <div class="stathead">
              $200,000
            </div>
            <div class="stattext">
              donated since 2014
            </div>
          </FadeInSection>
        </div>
      </div>
      
      <div class="firstParBox">
        <FadeInSection>
          <p class="parHeader"  style={{width: 155}}>About Us</p>
          <p class="parText" style={{height: 128, left: 98, top: 96}}>
          Blueprints For Pangaea (B4P) is a 501(c)(3) not-for-profit medical surplus recovery organization (MSRO)
          that addresses global healthcare inequalities by redistributing 
          surplus medical supplies from the US to hospitals overseas. 
          We reduce expenses and environmental footprints, while enabling affordable, 
          high-quality patient care.</p>
          <p class="learnMore" style={{left: 892, top: 257}}><u>Learn More</u></p>
          <p class="arrowOne">&#8594;</p>
        </FadeInSection>
      </div>

      <div class="secondParBox">
        <FadeInSection>
          <p class="parHeader"  style={{width: 202}}>Our Mission</p>
          <p class="parText" style={{height: 40, left: 95, top: 109}}>Our mission is to reallocate unused medical 
          supplies from areas of excess to areas in need. By collecting and shipping supplies abroad, 
          we’re changing the fate of these precious medical resources and lives.</p>
          <p class="learnMore" style={{left: 901, top: 240}}><u>Learn More</u></p>
          <p class="arrowTwo">&#8594;</p>
        </FadeInSection>
      </div>

      <div class="flipBox">
        <p class="flipBoxHead">Our three core principles</p>
        <Flip fheader="SURPLUS" bheader="SURPLUS" flipurl='./homeflip1.png' flipleft={0} fliptop={167} btext="The US medical system throws away millions of pounds of completely unused medical supplies each year, contributing to a massive inefficiency."></Flip>
        <Flip fheader="REDIRECTION" bheader="REDIRECTION" flipurl='./homeflip2.png' flipleft={396.5} fliptop={167} btext="We work with hospitals and medical suppliers in the US to redirect these supplies from landfills to hospitals and clinics in need."></Flip>
        <Flip fheader="IMPACT" bheader="IMPACT" flipurl='homeflip3.png' flipleft={793} fliptop={167} btext="For every dollar we receive, there is a tremendous social impact. Each $1 we spend can ship up to $50 of medical supplies and make a difference in hundreds of lives."></Flip>
      </div>

      <div class="line">
        
      </div>

      <div class="newsletterContainer">
        <div class="newsletterBox">
          <div class="headerTop"><p><b>Join Our Newsletter</b></p></div>  
          <div class = "headerSection"><p>Stay updated on what we are doing!</p></div>
        </div>
        <a href="https://us5.campaign-archive.com/?u=64619a21bb97ee0fa434694d8&id=2ad997a041"class="editionBox">Read The Latest Edititon Here</a>
        
      </div>

      <SecondaryButton text="Subscribe" givenstyle={{left: '163px', top: '2939px'}}></SecondaryButton>
      

      <Footer givenstyle={{top: '3120px'}}></Footer>
    </div>
  );
}
  
export default Home;
