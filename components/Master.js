import Head from 'next/head';
import Navegacion from './Navegacion';

const MasterPage = (props) =>{
    return(
        <div>
            <Head>
                <title>Terabit</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/pulse/bootstrap.min.css"></link>
            </Head>

            <Navegacion />

        <div className="container mt-4">
            {props.children}
        </div>
    </div>
    )
};

export default MasterPage;