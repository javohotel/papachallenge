import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Minicart.module.scss'

const Minicart = () => {

    const [showMinicart, setShowMinicart] = useState(false);

    const showMinicartAction = () => {
        setShowMinicart(true)
    }

    const hideMinicartAction = () => {
        setShowMinicart(false)
    }

    return (
        <>
            <nav className={styles.headerNav}>
                <ul>
                    <li onClick={showMinicartAction}>
                        <i className="bi bi-cart3"></i>
                        <span className={styles.count}>1</span>
                    </li>
                    
                </ul>
            </nav>
            <div className={`${styles.offcanvasCart} ${showMinicart ? styles.activeMinicart : ''}`}>
                <div className={styles.header}>
                    <h5>Carrito</h5>
                    <strong onClick={hideMinicartAction} className={styles.close}>X</strong>
                </div>
                
                <div className={styles.productList}>
                    Muchos productos
                </div>

                <footer className={styles.miniCartFooter}>
                    <Link href="/checkout" ><a className="papabtn" onClick={hideMinicartAction}><h5>Ir a pagar</h5></a></Link>
                </footer>
            </div>
        </>
    )
}

export default Minicart;
