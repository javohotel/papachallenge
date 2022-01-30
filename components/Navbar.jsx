import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.headerNav}>
            <menu>
                <li><Link href="/checkout"><a><i class="bi bi-cart3"></i></a></Link></li>
            </menu>
        </nav>
    )
}

export default Navbar;
