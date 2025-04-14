import React, { useContext, useState, useEffect } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // State to track screen width
  const [isMobile, setIsMobile] = useState(false);
  
  // Transition
  const transition = { duration: 2, type: "spring" };

  // Theme context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  // Effect to check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mobile design component
  const MobileIntro = () => (
    <div className="intro-mobile">
      <div className="mobile-profile">
        <img src={boy} alt="Profile" className="mobile-profile-img" />
        <div className="mobile-name-container">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Hanzla Munir</span>
        </div>
      </div>
      
      <div className="mobile-floating">
        <FloatinDiv img={crown} text1="Full Stack App & Web" text2="Developer" />
      </div>
      
      <div className="mobile-description">
        <p>
          I'm Hanzla Munir, a skilled React Native and MERN Stack developer with over 3 years 
          of experience in mobile app development. I deliver quality solutions for software houses 
          and freelance clients.
        </p>
      </div>
      
      <div className="mobile-actions">
        <Link to="contact" smooth={true} spy={true}>
          <button className="button mobile-button">Hire me</button>
        </Link>
        {/* <div className="mobile-icons">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div> */}
      </div>
      
      <div className="mobile-blur-1"></div>
      <div className="mobile-blur-2"></div>
    </div>
  );

  // Desktop design (your original design)
  const DesktopIntro = () => (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Hanzla Munir</span>
          <span>
            I'm Hanzla Munir, a skilled React Native and MERN Stack developer with over 3 years of experience in mobile app development. I have a proven track record of successfully delivering projects for software houses as well as freelancing clients. My expertise includes building scalable and reusable components, creating seamless animations, implementing responsive designs, and utilizing npm packages for customization and optimization. With strong proficiency in API integration, I ensure smooth and efficient data handling. I am committed to continuous learning, quickly adapting to project requirements, and delivering high-quality, innovative solutions that meet client needs.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" style={{ width: "300px", height: "300px", marginTop: 60 }} />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Full Stack App & Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Team Player" text2="Award" /> */}
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );

  // Conditionally render based on screen size
  return isMobile ? <MobileIntro /> : <DesktopIntro />;
};

export default Intro;