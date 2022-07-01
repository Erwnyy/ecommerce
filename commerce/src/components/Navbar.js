import React, {useState} from 'react'
import { Link } from "react-router-dom";
import '../components/styles/global.style.css'
import '../components/js/main.js'


// React icons
import { FaAlignLeft } from "react-icons/fa";
import { FaShoppingBag } from 'react-icons/fa'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='container-utama'>
          <div className='body'>    
            <header className='l-header' id='header'>

                  <nav className='nav bd-grid'>
                        <div className={`nav-toggle ${isOpen && "show"}`} onClick={() => setIsOpen(!isOpen)} id='nav-toggle'>
                            <i className='bxs-grid'><FaAlignLeft /></i>
                        </div>

                        <div className='nav_logos'>
                            <h2><Link className='nav_logo' to="/">Yukkal.id</Link></h2>
                        </div>

                        <div className={`nav_menu ${isOpen && "show"}`} id='nav-menu'>
                            <ul className='nav_list'>
                                <li className='nav_item'><Link className='nav_link' to="/dashboard">Homepage</Link></li>
                                <li className='nav_item'><Link className='nav_link' to="/">Featured</Link></li>
                                <li className='nav_item'><Link className='nav_link' to="/">Women</Link></li>
                                <li className='nav_item'><Link className='nav_link' to="/">New</Link></li>
                                <li className='nav_item'><Link className='nav_link' to="/allproduct">Shop</Link></li>
                                <li className='nav_item'>
                                  <Link to="/produk_detail" className='nav_link logout'>Logout</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='nav_shop'>
                            <Link to="/keranjang" className='nav_shops'><FaShoppingBag /></Link>
                        </div>

                        

                  </nav>
                </header>
          </div>
        </div>
  )
}

export default Navbar;



// import React, {useState} from 'react'
// import { Link } from "react-router-dom";
// import '../components/styles/global.style.css'
// import '../components/js/main.js'

// // React icons
// import { FaAlignLeft } from "react-icons/fa";
// import { FaShoppingBag } from 'react-icons/fa'

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className='container-utama'>
//       <div className='body'>    
//         <header className='l-header' id='header'>
//                   <nav className='nav bd-grid'>
//                         <div className={`nav-toggle ${isOpen && "show"}`} onClick={() => setIsOpen(!isOpen)}>
//                             <i className='bxs-grid'><FaAlignLeft /></i>
//                         <s/div>

//                         <div className='nav_logo'>
//                             <h2><Link to="/">Yukkal.id</Link></h2>
//                         </div>

//                         <div className={`nav-menu ${isOpen && "show"}`} id='nav-menu'>
//                             <ul className='nav_list'>
//                                 <li className='nav_item'><Link className='nav_link' to="/">Homepage</Link></li>
//                                 <li className='nav_item'><Link className='nav_link' to="/">Featured</Link></li>
//                                 <li className='nav_item'><Link className='nav_link' to="/">Women</Link></li>
//                                 <li className='nav_item'><Link className='nav_link' to="/">New</Link></li>
//                                 <li className='nav_item'><Link className='nav_link' to="/allproduct">Shop</Link></li>
//                             </ul>
//                         </div>

//                         <div className='nav_shop'>
//                             <Link to="/keranjang"><FaShoppingBag /></Link>
//                         </div>

//                   </nav>
//                 </header>
//         </div>
//         </div>
//   )
// }

// export default Navbar;

