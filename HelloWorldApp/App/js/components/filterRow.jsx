import React from 'react';



const FilterRow = ({handleSearchInput}) => {
	const handleInputChange = event => {
		 handleSearchInput(event.target.value);
	};

    return (
        <div className="filter-row">
            <div>
                Search:
				<input className="form-control"
                    onChange={handleInputChange} />
            </div>			
		</div>						 	
	)
	
}


export default FilterRow;