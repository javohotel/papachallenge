import React from "react";
import styles from '../styles/Amiibo.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const AmiiboList = ({amiibo}) => {
    let randomPrice = Math.floor(Math.random() * 100) * 1000;
    let priceEncode = btoa(randomPrice);
    let amiiboLink = '/amiibos/' + amiibo.head + amiibo.tail + '?p=' + priceEncode;
    return(
        <li className={styles.amiicard}>
            <div className={styles.image}>
                <Link href={amiiboLink}>
                    <div style={{ position: 'relative', width: '240px', height: '200px' }}>
                        <Image layout="fill" objectFit="contain" src={amiibo.image} alt={amiibo.amiiboSeries} />
                    </div>
                </Link>
                
            </div>
            <h5>{amiibo.amiiboSeries}</h5>
            <p className={styles.price}>$ {randomPrice.toLocaleString('es-CL')}</p>
            <Link href={amiiboLink}><a className="papabtn">Ver producto</a></Link>
        </li>
    )
}

export default AmiiboList;