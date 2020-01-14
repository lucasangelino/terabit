import React from 'react';

const Precio = ({precio}) => {

    const {price, percent_change_1h, percent_change_7d, percent_change_24h} = precio;


    return (
        <div className="card text-white bg-primary mb-3 rounded-lg">
            <div className="card-header">Bitcoin</div>
            <div className="card-body">
                <h4 className="card-title">Precio Actual: ${price.toFixed(2)}</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="cart-text"><span className="font-weight-bold">Ultima hora: </span>{percent_change_1h}%</p>
                    <p className="cart-text"><span className="font-weight-bold">Ultimas 24 horas: </span>{percent_change_24h} %</p>
                    <p className="cart-text"><span className="font-weight-bold">Ultimos 7 dias: </span>{percent_change_7d} %</p>
                </div>
            </div>
        </div>
    );
};

export default Precio;