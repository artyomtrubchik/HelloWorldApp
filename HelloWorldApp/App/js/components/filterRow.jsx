import React from 'react';



const FilterRow = ({handleSearchInput}) => {
	const handleInputChange = event => {
		 handleSearchInput(event.target.value);
	};

	return(			
			<div>
			Search: 
				<input className="form-control"                   
                    onChange={handleInputChange}/>
			</div>						 	
	)
	
}


export default FilterRow;