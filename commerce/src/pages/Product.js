import React from 'react'
import { Link } from "react-router-dom";
import '../components/styles/global.style.css'

// React icons
import { FaArrowRight } from 'react-icons/fa'

export const Product = () => {
  return (
    <div className='container-utama'>
      <div className='body'>
             {/* ======================WOMEN SNEAKERS====================== */}
             <section className='women section' id='women'>
                    <h2 className='title_women'>WOMEN SNEAKERS</h2>
                    <div className='women_container bd-grid'>
                            {/* SNEAKER CARD 1 */}
                            <article className='sneaker'>
                                
                                <img src='/img/women4.png' className='sneaker_img'/>
                                <span className='sneaker_name'>Adidas Yello SP3</span>
                                <span className='sneaker_price'>Rp.5.000.000</span>
                                <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                            </article>

                            {/* SNEAKER CARD 2 */}
                            <article className='sneaker'>
                                
                                <img src='/img/women1.png' className='sneaker_img'/>
                                <span className='sneaker_name'>Adidas Yello SP2</span>
                                <span className='sneaker_price'>Rp.5.000.000</span>
                                <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                            </article>

                            {/* SNEAKER CARD 3 */}
                            <article className='sneaker'>
                                
                                <img src='/img/women2.png' className='sneaker_img'/>
                                <span className='sneaker_name'>Nike SPORT12</span>
                                <span className='sneaker_price'>Rp.1.000.000</span>
                                <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                            </article>

                            {/* SNEAKER CARD 4 */}
                            <article className='sneaker'>
                                
                                <img src='/img/women3.png' className='sneaker_img'/>
                                <span className='sneaker_name'>Nike SPORT12</span>
                                <span className='sneaker_price'>Rp.5.000.000</span>
                                <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                            </article>

                            {/* SNEAKER CARD 5 */}
                            <article className='sneaker'>
                                
                                <img src='/img/logo.png' className='sneaker_img'/>
                                <span className='sneaker_name'>Adidas Yello SP3</span>
                                <span className='sneaker_price'>Rp.5.000.000</span>
                                <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                            </article>

                            {/* SNEAKER CARD 5 */}
                            <article className='sneaker'>
                                
                                <img src='/img/new1.png' className='sneaker_img'/>
                                <span className='sneaker_name'>Adidas Yello SP3</span>
                                <span className='sneaker_price'>Rp.5.000.000</span>
                                <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                            </article>

                            {/* SNEAKER CARD 5 */}
                            <article className='sneaker'>
                                
                                <img src='/img/featured1.png' className='sneaker_img'/>
                                <span className='sneaker_name'>Adidas Yello SP3</span>
                                <span className='sneaker_price'>Rp.5.000.000</span>
                                <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                            </article>

                            {/* SNEAKER CARD 5 */}
                            <article className='sneaker'>
                                
                                <img src='/img/new1.png' className='sneaker_img'/>
                                <span className='sneaker_name'>Adidas Yello SP3</span>
                                <span className='sneaker_price'>Rp.5.000.000</span>
                                <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                            </article>
                        </div>

                        <div className='sneaker_pages bd-grid'>
                            <div>
                                <div className='sneaker_png'>1</div>
                                <div className='sneaker_png'>2</div>
                                <div className='sneaker_png'>3</div>
                                <div className='sneaker_png'>4</div>
                                <div className='sneaker_png'>&#8594;</div>
                            </div>
                        </div>
                    </section>
                </div>
              </div>
  )
}

export default Product;
