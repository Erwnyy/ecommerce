import React from 'react'
import '../components/styles/global.style.css'
import { Link } from "react-router-dom";
import '../components/js/main.js'

// React icons



export const ProdukDetail = () => {
  return (
    <div className='container-utama'>
        <div className='body'>

                <section class="home" id="home">
                    <div class="home_container bd-grid">
                        <div class="home_sneaker">
                            <div class="home_shape"></div>
                            <img src='/img/women1.png' alt='' className='home_img'/>
                        </div>

                        <div className='home_data'>
                            <span class="home_new">New in</span>
                            <h1 className="home_title">YEEZY BOOST SPLY - 350</h1>
                            <p class="home_description">This product make you have a much energy </p>
                                <div className='home_ukuran'>
                                    
                                </div>
                            <Link to="/produk_detail" className='button-dark'>Explore now</Link>
                        </div>
                    </div>
                </section>

        </div>
    </div>
  )
}

export default ProdukDetail;