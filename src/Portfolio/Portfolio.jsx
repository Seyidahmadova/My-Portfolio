import React from 'react'
import './Portfolio.css'
import img1 from '../assets/Screenshot 2023-04-25 194214.png'
import img2 from '../assets/Screenshot 2023-04-25 200813.png'
import img3 from '../assets/Screenshot 2023-04-25 202419.png'
import img4 from '../assets/Screenshot 2023-04-25 202831.png'
import img5 from '../assets/Screenshot 2023-04-25 204231.png'


export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className="portfolio-container">
        <div className="portfolio-header">
            <h1>Portfolio</h1>
        </div>

        <div className="portfolio-detail">
            <div className="portfolio-item">
                <div className="portfolio-image">
                    <img src={img1} alt='img1' style={{width: '260px', height: '180px'}}/>
                </div>
                <div className="portfolio-title">E-Commerce App</div>
                <div className="portfolio-link">
                    <div className="portfolio-github">
                        <a href='https://github.com/Seyidahmadova/E-Commerce'>Github</a>
                    </div>
                    <div className="portfolio-demo">
                        <a href='https://main--resilient-ganache-deb5dc.netlify.app/'>Live Demo</a>
                    </div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-image">
                    <img src={img2} alt='img2' style={{width: '260px', height: '180px'}}/>
                </div>
                <div className="portfolio-title">Currency Converter</div>
                <div className="portfolio-link">
                <div className="portfolio-github">
                        <a href='https://github.com/Seyidahmadova/Currency-Converter'>Github</a>
                    </div>
                    <div className="portfolio-demo">
                        <a href='https://main--tubular-rolypoly-9734a8.netlify.app/'>Live Demo</a>
                    </div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-image">
                    <img src={img3} alt='img3' style={{width: '260px', height: '180px'}}/>
                </div>
                <div className="portfolio-title">To-Do List</div>
                <div className="portfolio-link">
                <div className="portfolio-github">
                        <a href='https://github.com/Seyidahmadova/To-Do-List-1.2.0'>Github</a>
                    </div>
                    <div className="portfolio-demo">
                        <a href='https://fanciful-frangipane-4e5d42.netlify.app/'>Live Demo</a>
                    </div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-image">
                    <img src={img4} alt='img4' style={{width: '260px', height: '180px'}} />
                </div>
                <div className="portfolio-title">Movie Search</div>
                <div className="portfolio-link">
                <div className="portfolio-github">
                        <a href='https://github.com/Seyidahmadova/Movie-search'>Github</a>
                    </div>
                    <div className="portfolio-demo">
                        <a href='https://main--incomparable-duckanoo-d3ae00.netlify.app/'>Live Demo</a>
                    </div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-image">
                <img src={img5} alt='img5' style={{width: '260px', height: '180px'}} />
                </div>
                <div className="portfolio-title">Roll the dice</div>
                <div className="portfolio-link">
                <div className="portfolio-github">
                        <a href='https://github.com/Seyidahmadova/Roll-the-Dice'>Github</a>
                    </div>
                    <div className="portfolio-demo">
                        <a href='https://main--aesthetic-licorice-23c457.netlify.app/'>Live Demo</a>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}
