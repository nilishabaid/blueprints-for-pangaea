import React from 'react';
import './ExecBoard.css';
import Popup from './Popup.js'

function ExecutiveRow(props) {
  return (
    <div className="executive-row">
      <div className="executive-member">
        <Popup url={props.img1} execname={props.name1} execpos={props.title1} execdes={props.des1}/>
        <h2>{props.name1}</h2>
        <p>{props.title1}</p>
      </div>
      <div className="executive-member">
        <Popup url={props.img2} execname={props.name2} execpos={props.title2} execdes={props.des2}/>
        <h2>{props.name2}</h2>
        <p>{props.title2}</p>
      </div>
      <div className="executive-member">
        <Popup url={props.img3} execname={props.name3} execpos={props.title3} execdes={props.des3}/>
        <h2>{props.name3}</h2>
        <p>{props.title3}</p>
      </div>
      <div className="executive-member">
        <Popup url={props.img4} execname={props.name4} execpos={props.title4} execdes={props.des4}/>
        <h2>{props.name4}</h2>
        <p>{props.title4}</p>
      </div>
    </div>
  );
}

function ExecutiveBoard() {
  return (
    <div className="execContainer">
      <div className="exec2Container">
        <h1>Meet Our Executive Team</h1>
        <div className="rowsContainer">
          <ExecutiveRow
            img1="Ben_rathi.jpeg"
            name1="Ben Rathi"
            title1="Director, Founder"
            des1="Ben Rathi is the founder and chairman of Blueprints For Pangaea. As an undergraduate student at Michigan, he studied computer science, business, and biochemistry. After graduating, Ben was a consultant at McKinsey & Company for two years, where he advised technology, healthcare, and investment firms on a broad range of business strategy issues. He is passionate about reducing inefficiencies, expanding access to healthcare, and student entrepreneurship and volunteerism."
            img2="James_Ha.webp"
            name2="James Ha"
            title2="Director"
            des2 = "James holds a degree in Biology from the University of Michigan, where he developed his passion in healthcare, finance, and entrepreneurship. He is currently a consultant where he performs both functional consultation and technical development roles. After consulting, James hopes to positively impact the healthcare industry in the United States."
            img3="Prasanth_Kotha.webp"
            name3="Prasanth Kotha"
            title3="Director"
            des3 = "Prasanth Kotha is an incoming medical student at the University of Pennsylvania. During his time as an undergraduate at the University of Michigan, he studied Business Administration which helped him develop an interest in the intersection between business and healthcare. In the future, he hopes to become a practicing physician who can leverage his experiences to help shape the evolving healthcare system.​"
            img4="Elliane_Siebert.webp"
            name4="Elliane Siebert"
            title4="Director"
            des4= "Elliane Siebert received a degree in Community and Global Public Health from the University of Michigan which helped shape her interest in the intersection of culture and disease. She is an incoming medical student at Michigan State University where she aims to become a physician grounded in community and the social determinants of health"
          />
          <ExecutiveRow
            img1="Anurag_Bolneni.webp"
            name1="Anurag Bolneni"
            title1="Director"
            des1 = "Anurag Bolneni is a consultant at Optum, MSI Data Science student, and the Co-Founder of an early stage health-tech startup. As an undergraduate at Michigan, he studied business and biochemistry. Anurag has spent the last 7 years learning about healthcare globally and hopes to leverage his experiences to build scalable tech solutions that improve the quality of patient care."
            img2="Sana_Shah.webp"
            name2="Sana Shah"
            title2="Director"
            des2 = "Sana is a graduate of the University of Southern California with a degree in Health Promotion and Disease Prevention and served as the President and Founder of USC’s Blueprints For Pangaea chapter. Having witnessed the stark health inequities throughout Los Angeles, Sana is deeply invested in public health programs that leave community members feeling supported, educated, and with better health outcomes. Sana is currently applying to medical school and hopes to explore the nexus of biotechnology, health policy, and social impact organizations that together shape the U.S. healthcare system."
            img3="Shreya_Chalasani.webp"
            name3="Shreya Chalasani"
            title3="Chief Executive Officer"
            des3 = "Shreya Chalasani is a junior at the University of Michigan majoring in Microbiology with a minor in Business. She is passionate about finding the intersection between healthcare and business and plans to attend medical school after completing her undergraduate education. Utilizing her experiences from Blueprints, she hopes to combat health inequities as a physician by opening a free clinic to allow greater access to healthcare."
            img4="Rohan_Nanwani.webp"
            name4="Rohan Nanwani"
            title4="Chief of Staff"
            des4 = "Rohan Nanwani is a junior at the University of Michigan majoring in Biology, Health, and Society and minoring in Food and the Environment. He is interested in increasing his awareness of health disparities and environmental preservation across the globe, and he joined Blueprints to utilize these cultivated skills in the future as an aspiring physician."
          />
           <ExecutiveRow
            img1="Jerry_Juratli.webp"
            name1="Jerry (Hadi) Juratli"
            title1="Chief Operating Officer"
            des1="Jerry (Hadi) Juratli is a junior at the University of Michigan pursuing a degree in Biophysics. He is interested in utilizing social entrepreneurship to improve healthcare access and delivery, both locally and internationally. In the future, he hopes to work towards improving patient health outcomes at the intersection of biomedical innovation, bioethics, and healthcare policy."
            img2="Lars_Andersland.webp"
            name2="Lars Andersland"
            title2="Chief Financial Officer"
            des2 = "Lars Andersland is a junior at the University of Michigan pursuing a degree in Civil Engineering. His interests include medicine, business, alternative energy, environmental preservation, and international collective action. He also enjoys playing soccer and reading. Lars hopes to utilize the medical-business skills that Blueprints cultivates to improve public health systems."
            img3= "Nicole_Sorensen.webp"
            name3= "Nicole Sorensen"
            title3="Chief of Expansion"
            img4="Aparna_Reddy.webp"
            name4="Aparna Reddy"
            title4="Chief Development Officer"
            des4= "Aparna Reddy is a junior at the University of Michigan, majoring in Community and Global Public Health. Interested in promoting health equity and access to care , she hopes to work to alleviate disparities through, education and efficient systematic practice. In the future, Aparna plans to combine these interests to pursue an MD and become a practicing physician."
          />
          <ExecutiveRow
            img1="Michael_Strauss.webp"
            name1="Michael Strauss"
            title1="Vice President of Operations"
            des1="Michael Strauss is a junior studying business with a minor in applied statistics. He joined blueprints to experience the intersection of social impact and business in a logistics-heavy setting. After graduation, Mike plans to work for a social impact private equity or venture capital fund."
            img2="Blueprints.webp"
            name2="Divum Mittal"
            title2="Vice President of Finance"
            img3= "Nathaniel_Mettke.webp"
            name3= "Nathaniel Mettke"
            title3="Vice President of Expansion"
            des3 = "Nathaniel is a sophomore at the University of Michigan College of Engineering studying Chemical Engineering. He is interested in the intersection of engineering and business and hopes to tackle health inequities and help underserved areas. In the future, Nathaniel hopes to utilize his knowledge to create innovative, sustainable solutions for humanity.​"
            img4="Shruthi_Sunilkumar.webp"
            name4="Shruthi Sunilkumar"
            title4="Vice President of Development"
            des4= "Shruthi Sunilkumar is a junior at the University of Michigan pursuing a degree in Business with a minor in Biology. After completing her BBA, she hopes to attend medical school and become a physician. Her goal is to use business acumen and impact healthcare to ensure that medicine provides high quality care at affordable prices."
          />
          <ExecutiveRow
            img1="Pooja_Kolli.webp"
            name1="Pooja Kolli"
            title1="Vice President of Staff"
            des1="Pooja Kolli is a sophomore at the University of Michigan studying Business and Biomolecular Science. She is passionate about working at the intersection of business and healthcare, and leveraging her understanding of the two fields to create a tangible impact. She was drawn to Blueprints as the organization accomplishes exactly this through its focus on collaboration and innovating thinking."
            img2="John_Fitzpatrick.webp"
            name2="John Fitzpatrick"
            title2="Development Advisor"
            des2 = "John Fitzpatrick is a sophomore studying Business Administration. He is interested in decreasing the inefficiencies and unused medical waste of the U.S. healthcare system, through practical and methodical courses of action. After graduation, he plans to leverage the experience and knowledge acquired at Blueprints to improve workplace practices."
            img3= "Grant_Veldhuis.webp"
            name3= "Grant Veldhuis"
            title3="Senior Analyst, Former CEO, COO, VPO"
            des3 = "Grant is a junior at the University of Michigan studying Industrial and Operations Engineering with a minor in Computer Science. He is interested in how the simplicity of technology can be used to improve population-level health and allow physicians to focus more on their patients. In the future, he hopes to work closely with medical providers to increase the safety, efficiency, and equity of the healthcare system."
            img4="Sophie_Stukenborg.webp"
            name4="Sophie Stukenborg"
            title4="Expansion Manager"
            des4= "Sophie Stukenborg is a sophomore at the University of Michigan studying Economics with a minor in History. She is interested in solving inefficiencies and decreasing inequity within the healthcare industry. In the future, she hopes to use her experience at Blueprints to enter a career in positive business or non profit work."
          />
          <ExecutiveRow
            img1="Christian_Hausner.webp"
            name1="Christian Hausner"
            title1="Expansion Manager"
            des1="Christian Hausner is a sophomore at the University of Michigan studying Biochemistry. He is currently pursuing research in cardiovascular regeneration, and interested in improving outreach and flexibility within health care. He hopes to become a practicing physician and empower others by alleviating the burdens of health. For him, Blueprints is a key experience in both facets of his career."
            img2="Mariam_Tobia.webp"
            name2="Mariam Tobia"
            title2="Analyst"
            des2 = "Mariam Tobia is a junior at the University of Michigan studying Public Health. Although the intersection of healthcare and business fascinates her, she is very passionate about medicine. As an aspiring physician, she hopes to be able to use her knowledge of healthcare disparities around the world to help combat them in the future."
            img3= "Blueprints.webp"
            name3= "Katie Derrough"
            title3="Expansion Manager"
            des3 = "Katie Derrough is a sophomore at the University of Michigan studying Business Administration at the Ross School of Business, with minors in American Culture and Spanish. She hopes to have a career in business with the goal of improving historically inequitable fields such as healthcare and education. This past summer, she was a fellow at the UCSF Foundation where she helped the team understand potential investment opportunities in areas such as global payments, blockchain, and technology in emerging markets."
            img4="Blueprints.webp"
            name4="Saige Porter"
            title4="Senior Analyst"
            des4= "Saige Porter is a sophomore at the University of Michigan, studying Biology, Health, and Society. She is interested in racial disparities in the healthcare system and is active in bringing awareness to the systemic inequities affecting Black communities. She intends to mitigate these disparities as a medical professional and change agent working with underserved communities, domestic and international."
          />
          <ExecutiveRow
            img1="Keagan_Pratt.webp"
            name1="Keagan Pratt"
            title1="Senior Analyst"
            des1="Keagan Pratt is a junior studying Industrial and Operations Engineering with a minor in History. He is interested in the intersection between healthcare and technology particularly with an interest toward using technology to make healthcare more equitable. He hopes to eventually work at a high growth startup focused on leveraging technology to extend high-quality healthcare coverage to rural populations and those less proximate to hospitals."
            img2="Blueprints.webp"
            name2="Harshit Tewari"
            title2="Senior Analyst"
            des2 = "Harshit is a junior."
            img3= "Saranya_Nistala.webp"
            name3= "Saranya Nistala"
            title3="Senior Analyst"
            des3 = "Saranya Nistala is a senior at the University of Michigan, double majoring in Business and Computer Science. She is interested in the intersection of business and technology and its role in eliminating disparities in the healthcare field. After graduation, she plans to continue to work in the intersection of these fields and harness technology to eliminate such disparities around the world."
            img4="Michelle_Lee.webp"
            name4="Michelle Lee"
            title4="Analyst"
            des4= "Michelle Lee is a junior at the University of Michigan pursuing a degree in Neuroscience with a minor in Business. She is interested in learning more about the overlap between sustainability, business, and medicine in order to make healthcare more accessible and affordable to all. In the future, Michelle hopes to become a physician and intends to continue eliminating health inequities from within the healthcare system."
          />
        </div>
      </div>
    </div>
  );
}

export default ExecutiveBoard;
