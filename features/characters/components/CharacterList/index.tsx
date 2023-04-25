
import { ReactElement } from 'react';
import { CardCharacter } from '../CardCharacter';


type CharacterListProps = {
	characters:any[]
	
};


export const CharacterList = ( props: CharacterListProps): ReactElement => {
const { characters } =props;

	return (
		
		<div className="card-columns animate__animated animate__fadeIn">
            {  characters.map((character:any) =>
                <CardCharacter
                    key={character._id}
                    character={character}
                />
            )}
        </div>
	);
}


