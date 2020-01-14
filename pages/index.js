import Link from 'next/link';
import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import NoticiasCiencia from '../components/NoticiasCiencia';

const index = (props) =>{
    return(
        <MasterPage>
            <div className="row">               
                <div className="col-12">
                    <Precio 
                        precio={props.precioBitcoin}
                    />
                </div>

                <div className="col-md-8">
                    <h2 className="my-3">Noticias</h2>
                    <Noticias
                        noticias={props.noticias}
                    />
                </div>

                <div className="col-md-4">
                    <h2 className="my-3">>Destacados</h2>   
                    <NoticiasCiencia
                        noticias={props.noticiasCiencia}
                    />
                </div>


            </div>
        </MasterPage>
    )
}

// al cargarse el componenete se ejecuta esta funcion y guarda
// los resultados como props
index.getInitialProps = async () =>{
    // CryptoCompare https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD
    const noticiasAPIKey = '46f2c8f0caf84176b388d584fb606bae'
    const precio = await fetch(`https://api.coinmarketcap.com/v2/ticker/1/`);
    const noticias = await fetch(`https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=${noticiasAPIKey}&languages=es`);
    const noticiasCiencia = await fetch(`https://newsapi.org/v2/top-headlines?country=ar&category=science&apiKey=${noticiasAPIKey}&languages=es`)
    const rstPrecio = await precio.json();
    const rstNoticias = await noticias.json();
    const rstNoticiasCiencia = await noticiasCiencia.json();
    
    return {
        precioBitcoin : rstPrecio.data.quotes.USD,
        noticias : rstNoticias.articles,
        noticiasCiencia : rstNoticiasCiencia.articles
    }}

export default index;