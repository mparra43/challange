
import { ReactElement } from 'react';
import { CardCharacter } from '../CardCharacter';


type CharacterListProps = {
    characters: any[]

};


export const CharacterList = (props: CharacterListProps): ReactElement => {
    const { characters } = props;

    return (

        <div className="row row-cols-1 row-cols-md-3 g-4">
            {characters.map((character: any) =>
                <div className="col">
                    <CardCharacter
                        key={character._id}
                        character={character}
                    />
                </div>
            )}
        </div>
    );
}


