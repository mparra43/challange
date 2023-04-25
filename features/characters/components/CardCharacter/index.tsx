
import Link from 'next/link';
import { ReactElement } from 'react';
import moment from 'moment/moment';
import { useFetch } from '../../../../hooks/useFetch';


type CharacterListProps = {

	character:any
	
};


export const CardCharacter = ( props: CharacterListProps): ReactElement => {
const { character }= props;


	return (
		
        <div key={ character?._id } className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={character?.imageUrl} className="card-img" alt={character?.name}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"> {character?.name}</h5>
                    <p className="card-text">
                        <small className="text-muted"> { moment(character?.createdAt).format("YYYY-MM-DD") } </small>
                    </p>
                    <Link href={`/character/${ character?._id }`}>

                        <button
                            className="btn btn-outline-info"
                            // onClick={()=>{handleMovie(movie)}}
                        >
                            Más...
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    </div>
	);
}


