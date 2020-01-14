import React from 'react';
import Noticia from './Noticia';

const Noticias = (props) => {

    return (
        <div className="row">
            {props.noticias.map( noticia =>{
                return( 
                    <Noticia 
                        key={noticia.url}
                        noticia={noticia}
                />
                )
            })}
        </div>
    );
};

export default Noticias;

// import Noticia from './Noticia';

// const Noticias = (props) => {
//      return ( 
//           <div className="row">
//                {props.noticias.map(noticia => (
//                     <Noticia 
//                          key={noticia.url}
//                          noticia={noticia}
//                     />
//                ))}

//           </div>

//       );
// }
 
// export default Noticias;