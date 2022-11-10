import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Logo() {
    const Navigate = useNavigate();
  return (
    <div>
    <div className="nav-header">
    <a onClick={()=> Navigate('/')} className="brand-logo">
        <svg className="logo-abbr" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
            <rect className="rect-primary-rect" width="80" height="80" rx="16" fill="#1362FC"/>
            <circle cx="42" cy="19" r="10" fill="white"/>
            <circle cx="75.5" cy="76.5" r="16.5" fill="#12A7FB"/>
            <circle cx="5.5" cy="1.5" r="17.5" fill="#1362FC"/>
            <circle className="rect-primary-rect-1" cx="5.5" cy="1.5" r="16.5" stroke="white" strokeOpacity="0.66" strokeWidth="2"/>
            <path d="M33.7656 87.2159C34.9565 76.5246 37.5874 53.6112 38.5845 47.4881V47.4881C39.1698 43.8941 40.2547 47.2322 39.8692 50.8531C38.9933 59.0813 37.1429 74.1221 35.5121 87.4131C33.1225 106.889 33.3507 95.974 33.7635 88.0818" stroke="white" strokeWidth="21" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect className="rect-primary-rect" width="80" height="80" rx="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        <div className='inculogo ms-3'>
        INCUBATION
        </div>
    </a>
    
</div>
</div>
  )
}

export default Logo