import React from 'react';



const FilterRow = ({handleSearchInput}) => {
	const handleInputChange = event => {
		 handleSearchInput(event.target.value);
	};

    return (
        <div className="filter-row">
			Search: 
				<input className="form-control"                   
                    onChange={handleInputChange}/>
			</div>						 	
	)
	
}


export default FilterRow;