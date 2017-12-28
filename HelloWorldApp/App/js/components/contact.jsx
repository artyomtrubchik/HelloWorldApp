import React from 'react';
import ContactListStore from '../stores/ContactListStore';

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
    }    

    getProfilePicture(){
        if (this.state.contact.profilePicture) return this.state.contact.profilePicture;
        return "/profilePictures/default.jpg";
    }

    render() {
        var pictureStyle = {
            width: 200,
            height: 150,
            overflow: "hidden"
        };

        return ( 
            <div>
                <img style={pictureStyle} className="img-thumbnail" src={this.getProfilePicture()}/>
                <div>I'm a contact! My Id is {this.state.contact.id}</div>
            </div>
       )
    }
}

export default Contact;