import React from "react";
import styles from "./style.module.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.company}>
          <img className={styles.logo} src={"logo/logoWhite.svg"} alt="Perspective" />
          <p className={styles.companyText}>
            Embrace Your Vision<span className={styles.dot}>.</span> <br />
            It’s our ambition to Help visiualy impaired people integrate school
            better<span className={styles.dot}>.</span>
          </p>
          <div className={styles.media} >
            <a href="https://www.instagram.com/perception.officiel/  "><InstagramIcon /></a>
            <a href="https://www.facebook.com/Perspective-104942641874306 "><FacebookIcon /></a>
            <a href="https://www.linkedin.com/company/perception-officiel"><LinkedInIcon /></a>
          </div>
        </div>
        <section className={styles.section}>
          <h6 className={styles.smallTitle}>
            For businesses<span className={styles.dot}>.</span>
          </h6>
          <div className={styles.links}>
            <a href="#products">Perception Glasses</a>
            <a href="#products">Perception Writing</a>
            <a href="#home">Contact Us</a>
          </div>
        </section>
        <section>
          <h6 className={styles.smallTitle}>
            For Schools<span className={styles.dot}>.</span>
          </h6>
          <div className={styles.links}>
            <a href="#products">Perception Glasses</a>
            <a href="#products">Perception Writing</a>
            <a href="#home">Blog</a>
            <a href="#home">Contact Us</a>
          </div>
        </section>
        <section className={styles.section}>
          <h6 className={styles.smallTitle}>
            For Individuals<span className={styles.dot}>.</span>
          </h6>
          <div className={styles.links}>
            <a href="#products">Perception Glasses</a>
            <a href="#products">Perception Writing</a>
            <a href="#products">Blog</a>
            <a href="#home">Contact Us</a>
          </div>
        </section>
      </div>
      <hr className={styles.hr}/>
      <h6 className={styles.copyright}>©2021 Perception. All rights reserved.</h6>
    </footer>
  );
}

export default Footer;