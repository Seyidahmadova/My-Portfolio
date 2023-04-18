import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className="portfolio-container">
        <div className="portfolio-header">
            <h1>Portfolio</h1>
        </div>

        <div className="portfolio-detail">
            <div className="portfolio-item">
                <div className="portfolio-image"></div>
                <div className="portfolio-title"></div>
                <div className="portfolio-link">
                    <div className="portfolio-github"></div>
                    <div className="portfolio-demo"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
