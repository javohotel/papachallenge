import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../../context/AppContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import loading from '../../public/Rolling-1s-200px.gif';

const Amiibo = () => {
    const router = useRouter();
    const [singleAmiibo, setSingleamiibos] = useState({});
    const [tableData, setTabledata] = useState([]);
    const price = atob(router.query.p);
    const {addToCart} = useContext(AppContext);

    const handleAddToCart = (amiibo, price) => () => {
        addToCart(amiibo, price)
    }

    const API = 'https://www.amiiboapi.com/api/amiibo/';

    useEffect( () => {
        fetch(API + '?id=' + router.query.id)
            .then((response) => response.json())
            .then( (data) => {      
                setSingleamiibos(data.amiibo);
                setTabledata(data.amiibo.release);
            })
    },[]);

    return (
        
        <div className="container">
           <div className='row singleAmiiboRow'>
                    <div className="col-md-6 singleAmiibo-image">
                        <div style={{ position: 'relative', width: '580px', height: '500px' }}>
                            {Object.keys(singleAmiibo).length != 0 ? (
                                <Image alt="Amiibo" src={singleAmiibo.image} layout="fill" objectFit="contain" />
                            ) : <Image src={loading} width="150" height="150"/> }
                        </div>    
                    </div>
                    <div className="col-md-6 singleAmiibo-info">
                        <p className="volver"> <Link href="/"><a>Volver</a></Link> </p>
                        <h2>{singleAmiibo.amiiboSeries}</h2>
                        <p>Full name: {singleAmiibo.amiiboSeries} </p>
                        {Object.keys(singleAmiibo).length != 0 && <h4 style={ {color:'red'} }>$ {Number(price).toLocaleString('es-CL')}</h4>}
                        <button type="button" className="papabtn" onClick={handleAddToCart(singleAmiibo, price)}>Agregar al carro</button>
                    </div>
                </div><div className="row">
                        <div className="col-md-12">
                            <h3>
                                Descripción
                            </h3>

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Pais</th>
                                        <th scope="col">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {Object.keys(tableData).map((keyName, i) => (
                                        <tr key={i}>
                                            <td>{keyName}</td>
                                            <td>{tableData[keyName]}</td>
                                        </tr> 
                                   ))}
                                </tbody>
                            </table>
                        </div>
                    </div><style jsx>{`
                .singleAmiibo-image {
                    background:#f6f6f6;
                    text-align:center;
                    padding: 50px;
                }
                .singleAmiibo-image img {
                    max-width:500px;
                }
                .singleAmiibo-info {
                    padding:20px;
                    position:relative;
                }
                .singleAmiiboRow {
                    margin-bottom: 30px;
                }
                .volver {
                    position:absolute;
                    right:0;
                    color:#3fae7f;
                }
            `}</style>
        </div>
    )
}

export default Amiibo;