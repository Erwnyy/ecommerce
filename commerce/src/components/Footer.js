import React from 'react'
import { Link } from "react-router-dom";
import '../components/styles/global.style.css'

// React icons
import { FaAlignLeft } from "react-icons/fa";
import { FaShoppingBag } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div>
         {/* ======================footer section====================== */}

         <div className='footer section'>
                <div className='footer_container bd-grid'>
                    <div className='footer_box'>
                        <h3 className='footer_title'>Yukkal.id</h3>
                        <p className='footer_description'>New collection hype in 2022.</p>
                    </div>

                    <div className='footer_box'>
                        <h3 className='footer_title'>Explore</h3>
                        <ul>
                            <li><Link to="#" className='footer_link'>Home</Link></li>
                            <li><Link to="#" className='footer_link'>Featured</Link></li>
                            <li><Link to="#" className='footer_link'>Women</Link></li>
                            <li><Link to="#" className='footer_link'>New</Link></li>Fe
                        </ul>
                    </div>

                    <div className='footer_box'>
                        <h3 className='footer_title'>Support</h3>
                        <ul>
                            <li><Link to="#" className='footer_link'>Support Help</Link></li>
                            <li><Link to="#" className='footer_link'>Featured</Link></li>
                            <li><Link to="#" className='footer_link'>Women</Link></li>
                            <li><Link to="#" className='footer_link'>New</Link></li>Fe
                        </ul>
                    </div>
                </div>
                <p className='footer_copy'>&#169; 2022 Yukkal.id. All right deserve</p>
            </div>
    </div>
  )
}


export default Footer;
