import React from "react";
import styles from '../styles/Amiibo.module.scss';
import Link from 'next/link';

const AmiiboList = ({amiibo}) => {
    let randomPrice = Math.floor(Math.random() * 100000);
    let amiiboLink = '/amiibos/' + amiibo.head + amiibo.tail;
    return(
        <li className={styles.amiicard}>
            <div className={styles.image}>
                <Link href={amiiboLink}><img height="100" src={amiibo.image} alt="" /></Link>
            </div>
            <h4>{amiibo.amiiboSeries}</h4>
            <p className={styles.price}>$ {randomPrice.toLocaleString('es-CL')}</p>
            <Link href={amiiboLink}><a className="papabtn">Ver producto</a></Link>
        </li>
    )
}

export default AmiiboList;