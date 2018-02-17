import React from 'react';
import ContactList from './contactList';
import Contact from './contact';
import PageHeader from './pageHeader';
import ContactListActions from '../actions/contactListActions';
import ContactListStore from '../stores/ContactListStore';
import FilterRow from './filterRow';


function getStateFromFlux() {
    return {
        hideContactList: ContactListStore.isHidden(),
        contactList: ContactListStore.getContactList()
    }
}

export class MainComp extends React.Component {
    constructor(props){
        super(props);        
        this.state = getStateFromFlux();   
        this.handleBannerClick = this.handleBannerClick.bind(this);
		this.handleSearchInput = this.handleSearchInput.bind(this);		
        this._onSelect = this._onSelect.bind(this);     
        this._onChange = this._onChange.bind(this);      
    }      

    componentWillMount() {
        ContactListActions.loadContactList();
    }

    componentDidMount() {
        ContactListStore.addSelectListener(this._onSelect);
        ContactListStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ContactListStore.removeSelectListener(this._onSelect);
        ContactListStore.removeChangeListener(this._onChange);
    }

    handleBannerClick() {
        ContactListActions.showList();
    }

	handleSearchInput(filter) {		
        ContactListActions.applyFilter(filter);
    }
    
    render() {
        const style = {
            width: '80%',
            margin: '0 auto'
        }

        return (
            <div className="main-comp" style={style}>
                <div className="banner">
                        <h1 onClick={this.handleBannerClick}>Contact list app</h1>
                </div>			 
                <FilterRow handleSearchInput={this.handleSearchInput} ></FilterRow>	    
                <div className="content">
                    {
                        this.state.hideContactList ? <Contact></Contact> : <ContactList data={this.state.contactList}></ContactList>
                    }                    
                </div>                                 
             </div>
        );
    }

    _onSelect() {
        this.setState(getStateFromFlux());       
    }

    _onChange() {
        this.setState(getStateFromFlux());        
    }

   
}

export default MainComp;