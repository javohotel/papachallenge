import React from "react";
import styles from '../styles/Amiibo.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { connect } from "react-redux";
import { addProductToCart } from "../actions/cart";

const AmiiboList = (props) => {
    let randomPrice = Math.floor(Math.random() * 100) * 1000;
    let priceEncode = btoa(randomPrice);
    let amiiboLink = '/amiibos/' + props.amiibo.head + props.amiibo.tail + '?p=' + priceEncode;

    return(
        <li className={styles.amiicard}>
            <div className={styles.image}>
                <Link href={amiiboLink}>
                    <div style={{ position: 'relative', width: '240px', height: '200px' }}>
                        <Image layout="fill" objectFit="contain" src={props.amiibo.image} alt={props.amiibo.amiiboSeries} />
                    </div>
                </Link>
                
            </div>
            <h5>{props.amiibo.amiiboSeries}</h5>
            <p className={styles.price}>$ {randomPrice.toLocaleString('es-CL')}</p>
            <button type="button" onClick={() => props.addProduct(props.amiibo, randomPrice)} className="papabtn">Agregar al carro</button>
            <Link href={amiiboLink}><a>Ver producto</a></Link>
        </li>
    )
}

const mapStateToProps = state => {
    return {
      cart: state.cart
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      addProduct: (amiibo, randomPrice) => dispatch(addProductToCart(amiibo, randomPrice))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AmiiboList);