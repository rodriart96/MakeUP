import React, { Component } from 'react';
import style from '../../modules/product.module.css'
import {Link} from 'react-router-dom';
import Cabeza from '../Cabeza/cabeza';
import Footer from '../footer/footer';

const Product = () => {
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
            <h2>Detalles Producto</h2>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/store">Tienda</Link> </li>
                <li className={style.active}>The expert mascara</li>
            </ul>
        </div>
    </section>
    
                <section className={style.producto}>
        <div className={style.productWrapper}>
            <div className={style.row}>
                <div className={style.productImg}>
                    <img src={require("../../img/maquillaje/5.jfif")} alt="producto"/>
                </div>
                
                <div className={style.productDetail}>
                    <div className={style.productHead}>
                        <h5>eyes</h5>
                        <h2>The expert mascara</h2>
                        <h3>$35.00</h3>
                    </div>

                    <div className={style.divider}></div>
                    <div className={style.productBody}>
                        <li>Brand: <span>gucci</span></li>
                        <li>Product code: <span>PM 01</span></li>

                        <li>Availability:<span className={style.stock}> Out Stock</span></li>
                        <div className={style.rowShop}>
                            <div className={style.queryNumber}>
                                <div className={style.btnMinus}>-</div>
                                <div className={style.btnNumber}>1 </div>
                                <div className={style.btnPlus}>+</div>
                            </div>
                            <a to="#" className={style.myButton}>Añadir al carrito</a>
                        </div>
                        <div className={style.productInfo}>
                            <h5>DESCRIPCION</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptatum ipsum ea voluptatem porro itaque voluptas, ad, quisquam, sint perferendis quibusdam repudiandae accusantium! Doloribus porro natus repellat tenetur quo totam!</p>
                        </div>
                    </div>

                    <div className={style.divider}></div>
                    </div>
                    
                </div>
            </div>
        </section>
    
                <Footer/>
    </section>
            
        )
    }

export default Product;