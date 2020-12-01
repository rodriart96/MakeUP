import React, { Component } from 'react';
import style from '../../modules/landing.module.css'
import {Link} from 'react-router-dom';
const Footer = () => {
        return (
            <footer>
            <div className={style.contenedorFooter}>
                <div className={style.info}>
                    <div className={style.contacInfo}>
                        <h5 className={style.footertitle}>Contact info</h5>
                        <p className={style.infoText}><span>Address:</span> 2168 S Archer Ave, Chicago, IL 60616, US</p>
                        <p className={style.infoText}><span>Phone:</span> +1 312-808-1999</p>
                        <p className={style.infoText}><span>Opentime:</span> 8.00am - 11.00.pm</p>
                        <p className={style.infoText}><span>Email: </span>Beatycosmetics@gmail.com</p>
                    </div>
                    <div className={style.accinfo}>
                        <h5 className={style.footertitle}>Cuenta</h5>
                        <Link to="">Mi cuenta</Link>
                        <Link to="">Wishlist</Link>
                        <Link to="">Carrito</Link>
                        <Link to="">Tienda</Link>
                        <Link to="">Comprar</Link>
                    </div>
                    <div className={style.aboutInfo}>
                        <h5 className={style.footertitle}>Infomation</h5>
                            <Link to="/other/about">About us</Link>
                            <Link to="/other/contact">Careers</Link>
                            <Link to="/other/contact">Delivery Information</Link>
                            <Link to="/other/contact">Privacy Policy</Link>
                            <Link to="/other/contact">Terms & Condition</Link>
                    </div>
                    <div className={style.paymentsmeth}>
                        <h5 className={style.footertitle}>Payment methods</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit gravida facilisis. </p>
                        <div className={style.paymentmethods}>
                            <img src={require("../../img/payment.png")} alt="Payment methods"/></div>
                    </div>
                </div>
            </div>
        </footer>
     
        )
    }

    export default Footer;