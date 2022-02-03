import React from "react";
import { connect } from "react-redux";

const Checkout = (props)=> {

    const cart = [];
    console.log(props);

    return(
        <div className="container">
            <h1>Checkout</h1>
            {cart.length > 0 ? 
            <div className="row">
                <div className="col-md-7">
                    <h4>Información personal</h4>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Mama Jhons" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="palitos@deajo.com" />
                    </div>
                    <div className="mb-3">
                        <label for="telefono" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="telefono" placeholder="+56 9 1234 5678" />
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label for="region" className="form-label">Region</label>
                                <input type="text" className="form-control" id="region" placeholder="Region" />
                            </div>
                            <div className="col-md-6">
                                <label for="comuna" className="form-label">Comuna</label>
                                <input type="text" className="form-control" id="comuna" placeholder="Comuna" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="direccion" className="form-label">Direccion</label>
                        <input type="text" className="form-control" id="direccion" placeholder="Calle falsa 1234" />
                    </div>

                    <div className="mb-3">
                        <a href="/" className="papabtn">Pagar</a>
                    </div>
                </div>
                <div className="col-md-5 cart-resume">
                    <h5>Resumen</h5>
                    <p>Este es el resumen de tu pedido:</p>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.tail} className="list-group-item d-flex justify-content-between align-items-start">    
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">{item.amiiboSeries}</div>
                                {item.character}
                                </div>
                            
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            : <div className="alert alert-warning" role="alert">
                    No tienes productos para pagar
                </div> 
            }
        </div>
        
    )
}

export default connect()(Checkout);
  