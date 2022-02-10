import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss'
import Amiibo from '../components/Amiibo';
import loading from '../public/Rolling-1s-200px.gif';
import Image from 'next/image';

export default function Home() {
  const [amiibos, setAmiibos] = useState([]);

  const API = 'https://www.amiiboapi.com/api/amiibo/';

  const ISSERVER = typeof window === "undefined";

  if(!ISSERVER) {
    const cache = sessionStorage.getItem('amiibos');
    
    useEffect( ()=>{
      if(cache) {
        setAmiibos(JSON.parse(cache));
      } else {
        fetch(API)
            .then((response) => response.json())
            .then( (data) => {
              const filterAmiibos = data.amiibo.filter((value, index, self) =>
                index === self.findIndex((t) => (
                  t.amiiboSeries === value.amiiboSeries
                ))
              )
              setAmiibos(filterAmiibos);
              sessionStorage.setItem('amiibos',JSON.stringify(filterAmiibos));
            })
      }
    }, []) 
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos a PapaApp
        </h1>
        {amiibos.length > 0 ?
          <ul className={styles.amiibosList}>
            {amiibos.map((amiibo) => (
              <Amiibo key={amiibo.head + amiibo.tail} amiibo={amiibo}></Amiibo>
            ))
            }
          </ul>
          : <p style={{textAlign:'center'}}><Image src={loading} width="150" height="150"/></p> }
        
      </main>
    </div>
  )
}
