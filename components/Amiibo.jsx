import React, {useContext} from "react";
import AppContext from '../context/AppContext';
import styles from '../styles/Amiibo.module.scss';
import Link from 'next/link';
import Image from 'next/image';


const AmiiboList = ({amiibo}) => {
    let randomPrice = Math.floor(Math.random() * 10000) * 10;
    let priceEncode = btoa(randomPrice);
    let amiiboLink = '/amiibos/' + amiibo.head + amiibo.tail + '?p=' + priceEncode;

    const {addToCart} = useContext(AppContext);

    const handleAddToCart = (amiibo, price) => () => {
        addToCart(amiibo, price)
    }


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
            <button type="button" className="papabtn" onClick={handleAddToCart(amiibo, randomPrice)}>Agregar al carro</button>
            <p className={styles.ver}><Link href={amiiboLink}><a>Ver producto</a></Link></p>
        </li>
    )
}

export default AmiiboList;