import React from 'react';
import FilterRow from './filterRow';

const PageHeader = ({handleBannerClick, handleSearchInput}) => {
	return (<div className = "pageHeader" style={{display: 'inline-block'}}>
				<div>
				  <h1 onClick={handleBannerClick}>Contact list app</h1>
				</div>			 
				<FilterRow handleSearchInput={handleSearchInput} ></FilterRow>
			</div>)
}

export default PageHeader;