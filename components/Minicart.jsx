import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Minicart.module.scss';


const Minicart = () => {

    const cart = [];
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
                        {cart.length > 0 && <span className={styles.count}>{cart.length}</span>}
                    </li>
                    
                </ul>
            </nav>
            <div className={`${styles.offcanvasCart} ${showMinicart ? styles.activeMinicart : ''}`}>
                <div className={styles.header}>
                    <h5>Carrito</h5>
                    <strong onClick={hideMinicartAction} className={styles.close}>X</strong>
                </div>
                
                <div className={styles.productList}>
                {cart.length > 0 ?
    
                    <ul className="list-group list-group-numbered">
                        {cart.map((item) => (
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">{item.amiiboSeries}</div>
                                {item.character}
                                </div>
                                <span style={{cursor: 'pointer'}} onClick={handdleRemove(item)} className="badge bg-danger rounded-pill"><i className="bi bi-trash" /></span>
                          </li>
                           
                        ))}
                  </ul>

                : <p>No tienes productos en tu carrito</p>
                }
                </div>

                <footer className={styles.miniCartFooter}>
                    <Link href="/checkout" ><a className="papabtn" onClick={hideMinicartAction}><h5>Ir a pagar</h5></a></Link>
                </footer>
            </div>
        </>
    )
}

export default Minicart;
