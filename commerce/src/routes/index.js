import React from "react";
import { Routes ,Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Home from '../pages/Home'
import Keranjang from "../pages/Keranjang";
import Login from "../pages/Login";
import Product from '../pages/Product'
import ProdukDetail from "../pages/ProdukDetail";
import Register from "../pages/Register";

const Router = () => {
    return(
        <div>

            <Navbar />
            <Routes >
                <Route path="/" exact element={<Home />}/>;
                <Route path="/dashboard" exact element={<Home />}/>;
                <Route path="/allproduct" exact element={<Product />}/>;
                <Route path="/keranjang" exact element={<Keranjang />}/>;
                <Route path="/produk_detail" exact element={<ProdukDetail />}/>;
                <Route path="/register" exact element={<Register />}/>;
            </Routes >
            <Footer/>

            {/* <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/dashboard">
                        <Home/>
                </Route>
                <Route exact path="/allproduct">
                    <Navbar />
                        <Product/>
                    <Footer/>
                </Route>
                <Route exact path="/keranjang">
                    <Navbar />
                        <Keranjang/>
                    <Footer/>
                </Route>
                <Route exact path="/produk_detail">
                    <Navbar />
                        <ProdukDetail/>
                    <Footer/>
                </Route>
            </Routes> */}



            {/* <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/dashboard">
                        <Home/>
                </Route>
                <Route exact path="/allproduct">
                    <Navbar />
                        <Product/>
                    <Footer/>
                </Route>
                <Route exact path="/keranjang">
                    <Navbar />
                        <Keranjang/>
                    <Footer/>
                </Route>
                <Route exact path="/produk_detail">
                    <Navbar />
                        <ProdukDetail/>
                    <Footer/>
                </Route>
            </Routes> */}
        </div>
    )
}

export default Router;