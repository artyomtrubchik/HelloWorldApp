import React from 'react';
import ContactRow from './contactRow';
import ContactForm from './contactForm';
import ContactListStore from '../stores/ContactListStore';
import ContactListActions from '../actions/contactListActions';


function getStateFromFlux() {
    return {
        contactList: ContactListStore.getContactList()
    }
}

export class ContactList extends React.Component{     
    constructor(props){
        super(props);
        this.state = getStateFromFlux();
        this.handleContactSubmit = this.handleContactSubmit.bind(this);
        this._onChange = this._onChange.bind(this);    
    }
    
    componentDidMount() {
        ContactListStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ContactListStore.removeChangeListener(this._onChange);
    }

    handleContactSubmit(contact) {
        ContactListActions.addContactToList(contact);
    }   
	   

    render() {
        var contactRows = this.props.data.map(contact =>
            <ContactRow id={contact.id} firstName={contact.firstName} lastName={contact.lastName} gender={contact.gender} isBusinessContact={contact.isBusinessContact} key={contact.id}>                
        </ContactRow>)    
		
		const style = {
            marginTop: '10px'
        }


        return (            
            <div className="contactList" style={style}>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{width:'10%'}}>Id</th>
                            <th style={{width:'20%'}}>First Name</th>
                            <th style={{width:'20%'}}>Last Name</th>
                            <th style={{width:'20%'}}>Gender</th>
                            <th style={{width:'20%'}}>Business contact</th>
                        </tr>                       
                    </thead>
                    <tbody>
                        <ContactForm onSubmit={this.handleContactSubmit}></ContactForm>						
                        {contactRows}
                    </tbody>                 
                </table>
            </div>
        )
        
    }
    
    _onChange() {
        this.setState(getStateFromFlux());        
    }
};

export default ContactList;