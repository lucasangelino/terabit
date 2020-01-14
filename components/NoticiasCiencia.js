import React from 'react';
import NoticiaCiencia from './NoticiaCiencia';

const NoticiasCiencia = ({noticias}) => {
    const eventosId = Object.keys(noticias)

    return (
        <div className="list-group">
            {eventosId.map( key =>{
                return(
                    <NoticiaCiencia
                        key={key}
                        info={noticias[key]}
                    />
                )
            })}                        
        </div>
    );
};

export default NoticiasCiencia;