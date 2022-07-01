import React from 'react'
import '../components/styles/global.style.css'
import { Link } from "react-router-dom";
import '../components/js/main.js'

// React icons
import { FaAlignLeft } from "react-icons/fa";
import { FaShoppingBag } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

export const Home = () => {
  return (
    <div className='container-utama'>
      <div className='body'>

            {/* ======================Msain Home====================== */}

            <main className='l-main'>
              {/* HOME */}
                <section class="home" id="home">
                    <div class="home_container bd-grid">
                        <div class="home_sneaker">
                            <div class="home_shape"></div>
                            <img src='/img/imghome.png' alt='' className='home_img'/>
                        </div>

                        <div className='home_data'>
                            <span class="home_new">New in</span>
                            <h1 className="home_title">YEEZY BOOST SPLY - 350</h1>
                            
                            <p class="home_description">Explore the new collections of sneakers</p>
                            <Link to="/produk_detail" className='button-dark'>Explore now</Link>
                        </div>
                    </div>
                </section>

                 {/* ======================FEATURED====================== */}
                <section className='featured section' id='featured'>
                    <h2 className='section_title'>FEATURED</h2>
                    
                    <div className='featured_container bd-grid'>
                        <article className='sneaker'>
                            <div className='sneaker_sale'>Sale</div>
                            <img src='/img/featured1.png' className='sneaker_img'/>
                            <span className='sneaker_name'>Nike Jordan SH2</span>
                            <span className='sneaker_price'>Rp.15.000.000</span>
                            <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                        </article>

                        <article className='sneaker'>
                            <div className='sneaker_sale'>Sale</div>
                            <img src='/img/featured2.png' className='sneaker_img'/>
                            <span className='sneaker_name'>Nike Jordan SP3</span>
                            <span className='sneaker_price'>Rp.15.000.000</span>
                            <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                        </article>

                        <article className='sneaker'>
                            <div className='sneaker_sale'>Sale</div>
                            <img src='/img/featured3.png' className='sneaker_img'/>
                            <span className='sneaker_name'>Nike Jordan SP1</span>
                            <span className='sneaker_price'>Rp.15.000.000</span>
                            <Link to="#" className='button-light'>Add to Cart <FaArrowRight /></Link>
                        </article>
                    </div>
                </section>

                  {/* ======================COLLECTION====================== */}

                <section  className='collection section'>
                    <h2 className='title_collection'>Collection Brand</h2>
                    <div className='collection_container bd-grid'>
                            {/* DATA COLLECTION 1*/}
                            <div className='collection_card'>
                                <div className='collection_data'>
                                    <h3 className='collection_name'>Nike</h3>
                                    <p className='collection_description'>New Collection 2020</p>
                                    <Link to="#" className='button-light'>Buy now <FaArrowRight /></Link>
                                </div>
                                <img src='/img/collection1.png' className='collection_img' alt=''/>
                            </div>
                            {/* DATA COLLECTION 2*/}
                            <div className='collection_card'>
                                <div className='collection_data'>
                                    <h3 className='collection_name'>Nike</h3>
                                    <p className='collection_description'>New Collection 2020</p>
                                    <Link to="#" className='button-light'>Buy now <FaArrowRight /></Link>
                                </div>
                                <img src='/img/collection2.png' className='collection_img' alt=''/>
                            </div>
                            {/* DATA COLLECTION 3*/}
                            <div className='collection_card'>
                                <div className='collection_data'>
                                    <h3 className='collection_name'>Nike</h3>
                                    <p className='collection_description'>New Collection 2020</p>
                                    <Link to="#" className='button-light'>Buy now <FaArrowRight /></Link>
                                </div>
                                <img src='/img/collection1.png' className='collection_img' alt=''/>
                            </div>
                    </div>
                </section>

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
                    </div>
                </section>

                    {/* ======================OFFERS SECTION====================== */}

                <section className='offer section'>
                    <div className='offer_container bd-grid'>
                        <div className='offer_data'>
                            <h3 className='offer_title'>50% OFF</h3>
                            <p className='offer_description'>Adidas product super sale sneakers</p>
                            <Link to="#" className='button-dark'>Shop now</Link>
                        </div>

                        <img src='/img/offert.png' className='offer_img'/>
                    </div>
                </section>

                {/* ======================New collection====================== */}

                <section className='new collection' id='collection'>
                    <h2 className='section_title'> New Collection</h2>

                    <div className='new_container bd-grid'>
                        <div className='new_men'>
                            <img src='/img/new1.png' className='new_img'/>
                            <h3 className='new_title'>Mens Shoes</h3>
                            <span className='new_price'>From Rp.2.000.000</span>
                            <Link to="#" className='button-light'>View Collection<FaArrowRight /></Link>
                        </div>

                        <div className='new_sneaker'>
                            {/* CARD SNEAKER 1 */}
                            <div className='new_sneaker-card'>
                                <img src='/img/new2.png' className='new_sneaker-img'/>
                                    <div className='new_sneaker-overlay'>
                                        <Link to="#" className='button-dark'>Add to cart<FaArrowRight /></Link>
                                    </div>       
                            </div>
                            {/* CARD SNEAKER 2 */}
                            <div className='new_sneaker-card'>
                                <img src='/img/new2.png' className='new_sneaker-img'/>
                                    <div className='new_sneaker-overlay'>
                                        <Link to="#" className='button'>Add to cart<FaArrowRight /></Link>
                                    </div>       
                            </div>
                            {/* CARD SNEAKER 3 */}
                            <div className='new_sneaker-card'>
                                <img src='/img/new3.png' className='new_sneaker-img'/>
                                    <div className='new_sneaker-overlay'>
                                        <Link to="#" className='button-dark'>Add to cart<FaArrowRight /></Link>
                                    </div>       
                            </div>
                            {/* CARD SNEAKER 4 */}
                            <div className='new_sneaker-card'>
                                <img src='/img/new4.png' className='new_sneaker-img'/>
                                    <div className='new_sneaker-overlay'>
                                        <Link to="#" className='button'>Add to cart<FaArrowRight /></Link>
                                    </div>       
                            </div>
                            {/* CARD SNEAKER 5 */}
                            <div className='new_sneaker-card'>
                                <img src='/img/new5.png' className='new_sneaker-img'/>
                                    <div className='new_sneaker-overlay'>
                                        <Link to="#" className='button-dark'>Add to cart<FaArrowRight /></Link>
                                    </div>       
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    </div>
  )
}

export default Home;

