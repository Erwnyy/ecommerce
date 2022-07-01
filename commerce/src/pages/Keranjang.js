import React from 'react'
import { Link } from "react-router-dom";
import '../components/styles/global.style.css'
import '../components/styles/keranjang.css'
import '../components/js/main.js'

// React icons
import { FaTimesCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


export const Keranjang = () => {
  return (
    <div className='container-utama'>
        <div className='body'>
            <section className='keranjang section'>
                <div className='keranjang_container bd-grid'>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>#</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td className='container_item'>
                                <div className='item_keranjang'>
                                    <img src='/img/collection1.png' className='keranjang_img'/>
                                    <h4 className='title_keranjang'>NIKE SR2 SPORT STASION</h4>
                                </div>
                            </td>
                            <td className='price_keranjang'>Rp.1.500.000</td>
                            <td className='jumlah_keranjang'><input type='number'/></td>
                            <td className='total_keranjang'>Rp.6.000.000</td>
                            <td><Link to="#" className='button_keranjang'><FaTimesCircle/></Link></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td className='container_item'>
                                <div className='item_keranjang'>
                                    <img src='/img/collection1.png' className='keranjang_img'/>
                                    <h4 className='title_keranjang'>NIKE SR2 SPORT STASION</h4>
                                </div>
                            </td>
                            <td className='price_keranjang'>Rp.1.500.000</td>
                            <td className='jumlah_keranjang'><input type='number'/></td>
                            <td className='total_keranjang'>Rp.6.000.000</td>
                            <td><Link to="#" className='button_keranjang'><FaTimesCircle/></Link></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td className='container_item'>
                                <div className='item_keranjang'>
                                    <img src='/img/collection1.png' className='keranjang_img'/>
                                    <h4 className='title_keranjang'>NIKE SR2 SPORT STASION</h4>
                                </div>
                            </td>
                            <td className='price_keranjang'>Rp.1.500.000</td>
                            <td className='jumlah_keranjang'><input type='number'/></td>
                            <td className='total_keranjang'>Rp.6.000.000</td>
                            <td><Link to="#" className='button_keranjang'><FaTimesCircle/></Link></td>
                        </tr>
                    </table>

                    <div className='total_price'>
                        <table>
                            <tr>
                                <td>Subtotal</td>
                                <td className='price'>Rp.15.000.000</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>Rp.500.000</td>
                            </tr>
                            <tr>
                                <td>Total payment</td>
                                <td>Rp.15.500.000</td>
                            </tr>
                            <Link to="#" className='button'>Buy<FaArrowRight /></Link>
                        </table>
                        
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Keranjang;
