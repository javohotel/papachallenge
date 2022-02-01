import React from "react";

const Checkout = ()=> {
    return(
        <div className="container">
            <h1>Checkout</h1>
            <div className="row">
                <div className="col-md-7">
                    <h4>Información personal</h4>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Mama Jhons" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="palitos@deajo.com" />
                    </div>
                    <div class="mb-3">
                        <label for="telefono" class="form-label">Teléfono</label>
                        <input type="text" class="form-control" id="telefono" placeholder="+56 9 1234 5678" />
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label for="region" class="form-label">Region</label>
                                <input type="text" class="form-control" id="region" placeholder="Region" />
                            </div>
                            <div className="col-md-6">
                                <label for="comuna" class="form-label">Comuna</label>
                                <input type="text" class="form-control" id="comuna" placeholder="Comuna" />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="direccion" class="form-label">Direccion</label>
                        <input type="text" class="form-control" id="direccion" placeholder="Calle falsa 1234" />
                    </div>

                    <div className="mb-3">
                        <a href="/" className="papabtn">Pagar</a>
                    </div>
                </div>
                <div className="col-md-5">
                    <h5>Resumen</h5>
                    <p>Este es el resumen de tu pedido:</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout;