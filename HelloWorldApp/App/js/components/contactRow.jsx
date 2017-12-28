import React from 'react';
import ContactListActions from '../actions/contactListActions';

export class ContactRow extends React.Component {
    constructor() {
        super();
        this.handleContactClick = this.handleContactClick.bind(this);
    } 

    handleContactClick() {
        ContactListActions.selectContact(this.props.id);
    }

    render() {
        return (
            <tr onClick={this.handleContactClick} className="contactRow">
                <td>{this.props.id}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName} </td>
                <td>{this.props.gender}</td>    
                <td><input type="checkbox" checked={this.props.isBusinessContact} disabled/></td>                          
             </tr>
        );
    }

    
}
export default ContactRow;