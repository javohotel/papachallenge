import Head from 'next/head';
import Minicart from './Minicart';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <Head>
                <title>Papa Challenge</title>
                <meta name="description" content="Palitos de ajo mmmm ñami" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>
            </Head>
            <div className='container header-container'>
               <Link href="/">
                    <a><Image width="150" height="64" src="https://www.papajohns.cl/static/media/papa-johns-logo.e036da11.svg" /></a>
                </Link>
               <Minicart></Minicart>
            </div>
        </>
    )
}

export default Header;