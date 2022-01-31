import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss'
import Amiibo from '../components/Amiibo';

export default function Home() {

  const [amiibos, setAmiibos] = useState([]);

  const API = 'https://www.amiiboapi.com/api/amiibo/'

  useEffect( () => {
    fetch(API)
          .then((response) => response.json())
          .then( (data) => {
            const filterAmiibos = data.amiibo.filter((value, index, self) =>
              index === self.findIndex((t) => (
                t.amiiboSeries === value.amiiboSeries
              ))
            )
            setAmiibos(filterAmiibos);
          })
  }, [] )


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos
        </h1>
        <ul className={styles.amiibosList}>
          {amiibos.map((amiibo) => (
            <Amiibo key={amiibo.head + amiibo.tail} amiibo={amiibo}></Amiibo>
          ))}
        </ul>
      </main>
    </div>
  )
}
