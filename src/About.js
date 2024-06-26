import React from "react";

const About = () => {
  return (
    <section class="about section" id="about">
      <h2 class="section-title">About</h2>

      <div class="about__container bd-grid">
        <div class="about__img">
          <img src={require("./img/perfil.png")} alt="" />
        </div>

        <div>
          <h2 class="about__subtitle">I'm Dipesh Gyawali</h2>
          <span class="about__profession">Full Stack Developer (MERN)</span>
          <p class="about__text">
            I have made projects such as: Ecommerce Website, Job Portal API,
            Cinemate, To Do App, Student Registration App, Blog, Resume/CV
            generator, Coverletter generator, Food listing app, Portfolio, News
            Portal API.
          </p>

          <div class="about__social">
            <a href="#" class="about__social-icon">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="#" class="about__social-icon">
              <i class="bx bxl-github"></i>
            </a>
            <a href="#" class="about__social-icon">
              <i class="bx bxl-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
