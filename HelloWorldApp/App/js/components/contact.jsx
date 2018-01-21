import React from 'react';
import ContactListStore from '../stores/ContactListStore';
import ContactListActions from '../actions/contactListActions';


function getStateFromFlux() {
    return {
        contact: ContactListStore.getSelectedContact()
    }
}

export class Contact extends React.Component {
    constructor(props) {
        super(props);   
		this.state = getStateFromFlux();
        this.getProfilePicture = this.getProfilePicture.bind(this);
		this._onContactLoad = this._onContactLoad.bind(this);  
    }    


	componentWillMount() {
        ContactListActions.loadSelectedContact(ContactListStore.getSelectedContactId());
    }

	componentDidMount() {
        ContactListStore.addContactLoadListener(this._onContactLoad);
    }

    componentWillUnmount() {
        ContactListStore.removeContactLoadListener(this._onContactLoad);
		this.setState({});
    }
    

    getProfilePicture(){
        if (this.state.contact && this.state.contact.profilePicture) return this.state.contact.profilePicture;
        return "/profilePictures/default.jpg";
    }

    render() {
        var pictureStyle = {
            width: 200,
            height: 150,
            overflow: "hidden"
        };

		if(this.state.contact)
		{
		 return ( 
            <div>
                <img style={pictureStyle} className="img-thumbnail" src={this.getProfilePicture()}/>
                <div>I'm a contact! My Id is {this.state.contact.id}</div>
            </div>
       )
		}
		else{
			return (<div></div>)
		}

       
    }

	_onContactLoad(){
		this.setState(getStateFromFlux());
	}
}

export default Contact;