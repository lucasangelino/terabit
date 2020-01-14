import React from 'react';

const Noticia = ({noticia}) => {
    const {urlToImage, url, title, description, source} = noticia;
    let imagen;

    if(urlToImage !== ''){
        imagen = <img src={urlToImage} alt={title} 
        className="card-img-top" />
    } else{
        imagen = <p className="text-center my-5">Imagen No Disponible</p>
    }


    let titulo = title;
    if(titulo){
        titulo = titulo.substr(0,150);
    }

    let desc = description;
    if(desc){
        desc = desc.substr(0,150);
    }
    
    return (
            <div className="col-md-6 col-12 mb-4">
                <div className="card rounded-lg shadow p-3 min-vw-25">
                    <div className="card-image">
                        {imagen}                        
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{titulo}</h3>
                        <p className="card-text">{desc}</p>
                        <a href={url} target="_blank" className="btn btn-primary d-block">Ver mas</a>               
                    </div>
                </div>
            </div>
    );
};

export default Noticia;