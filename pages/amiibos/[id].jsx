import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Amiibo = () => {
    const router = useRouter();
    const [singleAmiibo, setSingleamiibos] = useState({});
    let tr = {};

    const API = 'https://www.amiiboapi.com/api/amiibo/'

    useEffect( () => {
        fetch(API + '?id=' + router.query.id)
            .then((response) => response.json())
            .then( (data) => {
                setSingleamiibos(data.amiibo);
                /*tr = Object.keys(singleAmiibo.release).map(function(keyName, keyIndex) {
                    return `<tr>
                        <td>${keyName}</td>
                        <td>${singleAmiibo.release[keyName]}</td>
                    </tr>`;
                }) */
            })
    },[]);

    return (
        <div className="container">
            <div className='row singleAmiiboRow'>
                <div className="col-md-6 singleAmiibo-image">
                    <img src={singleAmiibo.image} alt="" />
                </div>
                <div className="col-md-6 singleAmiibo-info">
                    <h2>{singleAmiibo.amiiboSeries}</h2>
                    <p>Full name: {singleAmiibo.amiiboSeries} </p>
                    <Link href="/"><a className="papabtn">Agregar al carro</a></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                    <h3>
                        Descripción
                    </h3>

                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Pais</th>
                            <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                        </table>
                </div>
            </div>
            <style jsx>{`
                .singleAmiibo-image {
                    background:#f6f6f6;
                    text-align:center;
                    padding: 20px;
                }
                .singleAmiibo-info {
                    padding:20px;
                }
                .singleAmiiboRow {
                    margin-bottom: 30px;
                }
            `}</style>
        </div>
        
    )
}

export default Amiibo;