import Head from 'next/head';
import Navbar from './Navbar';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <Head>
                <title>Papa Challenge</title>
                <meta name="description" content="Palitos de ajo mmmm ñami" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>
            </Head>
            <div className='container header-container'>
               <Link href="/">
                    <a><img width="150" src="https://www.papajohns.cl/static/media/papa-johns-logo.e036da11.svg" alt="" /></a>
                </Link>
               <Navbar></Navbar>
            </div>
        </>
    )
}

export default Header;