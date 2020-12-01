import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../../modules/store.module.css'

import Footer from '../footer/footer'
import Cabeza from '../Cabeza/cabeza'
const Catologo = () => {

    return (
    
        <section>
            <section className={style.header}>
            <div className={style.logo}>
               <Link to="/">SWEET MAKE UP</Link> 
            </div>
            <div className={style.navbar}>
                <ul>
                    <li className={style.navitems}> <Link to="/">Inicio</Link>  </li>
                    <li className={style.navitems}> <Link to="/tienda">Tienda</Link> </li>
                    <li className={style.navitems}> <Link to="/nosotros">Sobre nosotros</Link> </li>
                    <li className={style.navitems}> <Link to="/contacto">Contacto</Link> </li>
                </ul>
                <ul className={style.shop}>
                    <li className={style.shopitems}> <Link to="/"><i className="fas fa-search"></i></Link> </li>
                    <li className={style.shopitems}> <Link to="/"><i className="fas fa-heart"></i></Link> </li>
                    <li className={style.shopitems}> <Link to="/"><i className="fas fa-shopping-cart"></i></Link> </li>
                    <li className={style.shopitems}> <Link to="/"><i className="fas fa-user"></i></Link></li>
                </ul>
                
            </div>
        </section>

        <section className={style.banner}>
        <div className={style.bannerHeader}>
            <h2>Tienda</h2>
            <ul>
                <li>Home</li>
                <li className={style.active}>Tienda</li>
            </ul>
        </div>
    </section>

            <section className={style.maquillaje}>
        <div className={style.makeupBody}>
            <div className={style.itemslist}>

                <div className={style.itemcontenedor}>
                    <Link to="/product/" >
                    <div className={style.itemImg}>
                        <img src={require("../../img//maquillaje/2.jfif")} alt=""/>
                    </div>
                    <li className={style.productHeader}>

                        <div className={style.itemCategory}>
                        <p>Crema</p>
                        </div>

                        <div className={style.itemName}>
                            <p>SET 3 CREMAS</p>
                        </div>
                    </li>
                    
                    <div className={style.itemPrice}>
                        <p>$12000</p>
                    </div>
                    </Link>
                </div>
                <div className={style.itemcontenedor}>
                    <Link to="/product/" >
                    <div className={style.itemImg}>
                        <img src={require("../../img//maquillaje/2.jfif")} alt=""/>
                    </div>
                    <li className={style.productHeader}>

                        <div className={style.itemCategory}>
                        <p>Crema</p>
                        </div>

                        <div className={style.itemName}>
                            <p>SET 3 CREMAS</p>
                        </div>
                    </li>
                    
                    <div className={style.itemPrice}>
                        <p>$12000</p>
                    </div>
                    </Link>
                </div>
                
                <div className={style.itemcontenedor}>
                    <Link to="/product/" >
                    <div className={style.itemImg}>
                        <img src={require("../../img//maquillaje/2.jfif")} alt=""/>
                    </div>
                    <li className={style.productHeader}>

                        <div className={style.itemCategory}>
                        <p>Crema</p>
                        </div>

                        <div className={style.itemName}>
                            <p>SET 3 CREMAS</p>
                        </div>
                    </li>
                    
                    <div className={style.itemPrice}>
                        <p>$12000</p>
                    </div>
                    </Link>
                </div>
                
                <div className={style.itemcontenedor}>
                    <Link to="/product/" >
                    <div className={style.itemImg}>
                        <img src={require("../../img//maquillaje/2.jfif")} alt=""/>
                    </div>
                    
                    <li className={style.productHeader}>

                        <div className={style.itemCategory}>
                        <p>Crema</p>
                        </div>

                        <div className={style.itemName}>
                            <p>SET 3 CREMAS</p>
                        </div><div className={style.itemPrice}>
                        <p>$12000</p>
                    </div>
                    </li>
                    
                    
                    </Link>
                </div>
                
                <div className={style.itemcontenedor}>
                    <Link to="/product/" >
                    <div className={style.itemImg}>
                        <img src={require("../../img//maquillaje/2.jfif")} alt=""/>
                    </div>
                    <li className={style.productHeader}>

                        <div className={style.itemCategory}>
                        <p>Crema</p>
                        </div>

                        <div className={style.itemName}>
                            <p>SET 3 CREMAS</p>
                        </div>
                    </li>
                    
                    <div className={style.itemPrice}>
                        <p>$12000</p>
                    </div>
                    </Link>
                </div>
                
                <div className={style.itemcontenedor}>
                    <Link to="/product/" >
                    <div className={style.itemImg}>
                        <img src={require("../../img//maquillaje/2.jfif")} alt=""/>
                    </div>
                    <li className={style.productHeader}>

                        <div className={style.itemCategory}>
                        <p>Crema</p>
                        </div>

                        <div className={style.itemName}>
                            <p>SET 3 CREMAS</p>
                        </div>
                    </li>
                    
                    <div className={style.itemPrice}>
                        <p>$12000</p>
                    </div>
                    </Link>
                </div>
                
                <div className={style.itemcontenedor}>
                    <Link to="/product/" >
                    <div className={style.itemImg}>
                        <img src={require("../../img//maquillaje/2.jfif")} alt=""/>
                    </div>
                    <li className={style.productHeader}>

                        <div className={style.itemCategory}>
                        <p>Crema</p>
                        </div>

                        <div className={style.itemName}>
                            <p>SET 3 CREMAS</p>
                        </div>
                    </li>
                    
                    <div className={style.itemPrice}>
                        <p>$12000</p>
                    </div>
                    </Link>
                </div>
                
                <div className={style.itemcontenedor}>
                    <Link to="/product/" >
                    <div className={style.itemImg}>
                        <img src={require("../../img//maquillaje/2.jfif")} alt=""/>
                    </div>
                    <li className={style.productHeader}>

                        <div className={style.itemCategory}>
                        <p>Crema</p>
                        </div>

                        <div className={style.itemName}>
                            <p>SET 3 CREMAS</p>
                        </div>
                    </li>
                    
                    <div className={style.itemPrice}>
                        <p>$12000</p>
                    </div>
                    </Link>
                </div>
                
                
            <div className={style.allProducts}>
                <Link to="#">Cargar mas productos</Link>
                <div className={style.underline}></div>
            </div>
            </div>
        </div>
    
    </section>
        
            <Footer/>
        </section>

        
    )
}



export default Catologo;