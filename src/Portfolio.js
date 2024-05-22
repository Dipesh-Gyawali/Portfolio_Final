import React from 'react'

const Portfolio = () => {
  return (
    <section class="portfolio section" id="portfolio">
        <h2 class="section-title">Portfolio</h2>

        <div class="portfolio__container bd-grid">
            <div class="portfolio__img">
                <img src={require('./img/work1.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="https://dipesh3.netlify.app/" target='_blank' class="portfolio__link-name">PROJECT NO:- 1</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work2.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="https://dipesh1.netlify.app/" target='_blank' class="portfolio__link-name">PROJECT NO:- 2</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work3.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="https://dipesh4.netlify.app/" target='_blank' class="portfolio__link-name">PROJECT NO:- 3</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work4.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="https://dipesh5.netlify.app/" target='_blank' class="portfolio__link-name">PROJECT NO:- 4</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work5.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="https://dipesh6.netlify.app/" target='_blank' class="portfolio__link-name">PROJECT NO:- 5</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work6.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="https://dipesh7.netlify.app/" target='_blank' class="portfolio__link-name">PROJECT NO:- 6</a>
                </div>
            </div>
        </div>
</section>
  )
}

export default Portfolio