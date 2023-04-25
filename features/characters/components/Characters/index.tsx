
import { ReactElement, useState } from 'react';
import { CardCharacter } from '../CardCharacter';
import { useFetch } from '../../../../hooks/useFetch';
import { CharacterList } from '../CharacterList';
import { useSearch } from '../../../../hooks/useSearch';
import { FilterBar } from '../../../tranversal';
import { Console } from 'console';
import { fetcher } from '../../../../helper/fetch';


type CharacterProps = {
	data: any[];
    
};

export const Characters = (props: CharacterProps): ReactElement => {

	const [characters, setCharacters] = useState([]);
	const { value, handleFilterChange, reset } = useSearch();

    const searcher = async ()=>{
		
		const searchData =  await fetcher({ endpoint: `character?name=${value.replace(' ', '%')}`, method: 'GET' })
		const res = await searchData.json();
		const filter = res.data.filter((e:any )=> e.name === value)
		setCharacters(filter);
        reset();

	}

	const handleSearch =(e:any) => {
		e.preventDefault();
		searcher()
	}

	return (

		<div className="container mt-2">
				<div className="card p-4" >
					<FilterBar onSubmit={handleSearch} onChange={handleFilterChange} parameterSearch={value} />
					<CharacterList characters={characters} />
				</div> 
				<div className="mt-4">
					<CharacterList characters={props.data} />

				</div>
		</div>
	);
}


