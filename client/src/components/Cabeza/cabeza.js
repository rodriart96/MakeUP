import React, { Component } from 'react';
import style from '../../modules/landing.module.css'
import {Link} from 'react-router-dom';
const Cabeza = () => {
        return (
            <header>
            <div className={style.logo}>
               <Link to="/">SWEET MAKE UP</Link> 
            </div>
            <div className={style.navbar}>
                <ul>
                    <li className={style.navitems}> <Link to="/">Inicio</Link>  </li>
                    <li className={style.navitems}> <Link to="/store">Tienda</Link> </li>
                    <li className={style.navitems}> <Link to="/nosotros">Sobre nosotros</Link> </li>
                    <li className={style.navitems}> <Link to="/contacto">Contacto</Link> </li>
                </ul>
                <ul className={style.shop}>
                    <li className={style.shopitems}> <Link to="/"><i className="fas fa-search"></i></Link> </li>
                    <li className={style.shopitems}> <Link to="/"><i className="fas fa-shopping-cart"></i></Link> </li>
                    <li className={style.shopitems}> <Link to="/"><i className="fas fa-user"></i></Link></li>
                </ul>
                
            </div>
        </header>
        )
    }

export default Cabeza;