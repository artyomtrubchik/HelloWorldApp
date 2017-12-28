import React from 'react';
import ContactList from './contactList';
import Contact from './contact';
import ContactListActions from '../actions/contactListActions';
import ContactListStore from '../stores/ContactListStore';


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
    
    render() {
        const style = {
            width: '80%',
            margin: '0 auto'
        }

        return (
            <div className="mainComp" style={style}>            
                <h1 onClick={this.handleBannerClick}>Contact list</h1>
                {
                    this.state.hideContactList ? <Contact></Contact> : <ContactList data={this.state.contactList}></ContactList>
                }
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