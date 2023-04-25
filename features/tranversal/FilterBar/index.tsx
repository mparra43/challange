
import { ReactElement } from 'react';


type FilterProps = {
	onSubmit: (e: any) => void
	onChange: (e: any) => void
	parameterSearch: string

};


export const FilterBar = (props: FilterProps): ReactElement => {
	const { onSubmit, onChange, parameterSearch } = props;

	return (

		<div className="container-from"  style={{ width: '100%'}}>
			<form className="form" onSubmit={onSubmit}>
				<h6 className="card-title">Personajes de Disney</h6>
				<div className='d-flex justify-content-center mb-4 '>
					<input
						type="text"
						placeholder="Encuentra tu personaje favorito"
						className="form-control w-70 "
						name="searchText"
						autoComplete="off"
						value={parameterSearch}
						onChange={onChange}
					/>
					<button type="submit" className="mr-2 btn btn-outline-info">
						Buscar
					</button>

				</div>

			</form>
		</div>
	);
}


