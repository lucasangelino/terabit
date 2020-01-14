import React from 'react';

const NoticiaCiencia = (info) => {

    const { title, description, url} = info.info;
    // obtengo primeros 200 caracteres
    let desc = description;
    if(desc){
        desc = desc.substr(0,250) + '...';
    }

    let titulo = title;
    if(titulo){
        titulo = titulo.substr(0,250) + '...';
    }



    return (
        <div className="card text-white bg-primary mb-3">
            <div className="card-body shadow-lg">
                <h4 className="card-title">{titulo}</h4>
                <p className="card-text">{desc}</p>
            </div>
        </div>
    );
};

export default NoticiaCiencia;