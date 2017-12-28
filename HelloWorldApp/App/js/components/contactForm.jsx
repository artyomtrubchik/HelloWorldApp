import React from 'react';

export class ContactForm extends React.Component {
    constructor(props){        
        super(props);      
        this.state = {
            firstName: '',
            lastName: '',
            gender: 'male',
            isBusinessContact: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit() {
        this.props.onSubmit(this.state);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    render() {    
        return (           
                    <tr>
                    <th style={{width:'10%'}}>
                        <button type="submit" 
                        className="btn btn-primary"
                        onClick={this.handleSubmit}
                        disabled={!this.state.firstName || !this.state.lastName}>Submit</button></th>
                    <th style={{width:'20%'}}>
                        <input className="form-control" 
                        placeholder="Person's first name" 
                        name="firstName"
                        onChange={this.handleInputChange}/></th>
                    <th style={{width:'20%'}}>
                        <input className="form-control" 
                        placeholder="Person's last name"
                        name="lastName"
                        onChange={this.handleInputChange}/></th>
                    <th style={{width:'20%'}}>
                        <select className="form-control"                      
                        name="gender"
                        onChange={this.handleInputChange}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select></th>
                    <th style={{width:'20%'}}>                
                        <input type="checkbox" 
                        className="form-check-input" 
                        style={{margin:'auto auto'}}
                        name="isBusinessContact"
                        onChange={this.handleInputChange}/></th>
                    </tr>              
        );
    }
}
export default ContactForm;