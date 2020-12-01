import React,{useEffect, useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import style from '../../modules/landing.module.css'
import axios from 'axios';
import Cabeza from '../Cabeza/cabeza';
import Footer from '../footer/footer'

import {URL} from '../../config/config';


function Landing () {

    const  [Makeup, setMakeup] = useState([]);
    const  [start] = useState(0);
    const  [end] = useState(7);
    
    const pelao = true;

     function request(){
         axios.get(`${URL}/tlBolths?_start=${start}&_end=${end}`)
            .then( res=> {
                console.log(res.data)
                setMakeup([...Makeup , ...res.data])
            })
            .catch(err =>{
                console.log(err)
                })
     };
    useEffect( 
        request
        ,[])
            if(pelao !== true){
                
              return(                
                <div>
                    coño
                </div>  
            )  
            } else{
    return (
      <section>
          <Cabeza/>
      <section className={style.mainSection}>
        
        <div className={style.headerBackground}>
           <img  src={require('../../img/header.png')} alt="header"/>
       </div>  

       <div className={style.textContainer}>
           <div className="headSub">
               <h5> Bringin your</h5>
           </div>
           <div className={style.headTitle}>
               <h1> Inner beauty out</h1>
           </div>
           <div className={style.headBox}>
               <h3><Link to="#">Conocenos</Link></h3>
           </div>
       </div>   
   
         
      </section>
    
      <section className="aboutme">
            <div className={style.container}>
                <div className={style.about}>
              <div className={style.aboutColumnL}>
                    <div className={style.aboutFrontImg}>
                        <div className={style.aboutUpImg}>
                            <img src={require('../../img/23271823-model-face-of-beautiful-woman-with-foundation-on-skin-make-up-cosmetics-.jpg')}   alt=""/>
                        </div>
                        <div className={style.aboutDwImg}>
                            <img  src={require("../../img/makeup-brushes-1080x720.jpg")} alt=""/>
                        </div>
                    </div>
                    <div className={style.shit}>
                        <div className={style.aboutBackUpImg}>
                            <img src={require("../../img/bg1.png")} alt=""/>
                        </div>
                        <div className={style.aboutBackDwImg}>
                            <img src={require("../../img/bg2.png")} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.aboutColumnR}>
                    <h3>Sweet Makeup</h3>
                    <h1>Cuando te ves bien, te sientes bien</h1>
                    <img className={style.abouco} src={require("../../img/content-deco.png")} alt=""/>
                    <p>The top three occupations in the Beauty salons Industry Group are Hairdressers, hairstylists, & cosmetologists, Manicurists and pedicurists, Receptionists & information clerks, Supervisors of personal care and service workers, and Skincare specialists.</p>
                </div>
            </div>
            </div>
    </section>
    
    <section className="maquillaje">
            <div className={style.makeupHeader}>
                <h2 className={style.makeupTitle}>Productos</h2>
                <div> <img src={require("../../img/content-deco.png")} alt=""/></div>
            </div>
            <div className={style.makeupBody}>
                <div className={style.itemsList}>
                    <div className={style.itemcontenedor}>
                        <Link to='/product/'>
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
                        <Link to='/product/'>
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
                        <Link to='/product/'>
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
                        <Link to='/product/'>
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
                        <Link to='/product/'>
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
                        <Link to='/product/'>
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
                        <Link to='/product/'>
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
                        <Link to='/product/'>
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
                      </div>
                <div className={style.allProducts}>
                    <Link to="/store">Todos los productos</Link>
                    <div className={style.underline}></div>
                </div>
                
            </div>
    </section>
    
    <section className={style.contacto}>           
            <div className={style.contactForm}>
                <div className={style.formHeader}>
                    <h2>Contacto</h2>
                    <img src={require("../../img/content-deco.png")} alt=""/>
                </div>

                <div className={style.formBody}>
                    <div className={style.actform}>
                        <div>
                            <label for="fname">Nombre </label>
                            <input type="text" id="fname" name="fname" placeholder="Nombre"/><br/>
                        </div>

                        <div >
                            <label for="lname">Apellido
                                </label>
                            <input type="text" id="lname" name="lname" placeholder="Apellido"/><br/>
                        </div>

                        <div >
                            <label for="fnumber">Fono</label>
                            <input type="text" id= "fnumber" name="fnumber" placeholder="Fono"/>
                        </div>

                        <div>
                            <label for="email">Email</label>
                            <input  type="email" id="email" name="email" placeholder="Email"/> 
                        </div>
                    </div>

                    <div className={style.formbody}>
                      <Link to="#" className={style.myButton}>ENVIAR</Link></div>
                </div>
            </div>
            <div className={style.backImg}>
                <img src={require("../../img/contact.png")} alt=""/>
            </div>
    </section>

        <Footer/>
      
            </section>
        )
    }       
}


export default Landing;