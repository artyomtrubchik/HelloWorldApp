import AppDispatcher from '../dispatcher/appDispatcher';
import AppConstants from '../constants/appConstants';

const ContactListActions = {
    loadContactList(){
        var xhr = new XMLHttpRequest();
        xhr.open("get" , "/contacts", true);
        xhr.onload = function(){
            var contacts = JSON.parse(xhr.responseText);
            AppDispatcher.dispatch({
                type: AppConstants.CONTACT_LIST_LOAD_SUCCESS,
                contacts: contacts
            })            
        }.bind(this);
        xhr.send();
    },

    loadSelectedContact(id){
        var xhr = new XMLHttpRequest();
        xhr.open("get" , "/GetContactById?id=" + id, true);
        xhr.onload = function(){
            var contact = JSON.parse(xhr.responseText);
            AppDispatcher.dispatch({
                type: AppConstants.CONTACT_LOADED,
                contact: contact
            })            
        }.bind(this);
        xhr.send();
    },

    addContactToList(contact){    
        $.ajax({
            type: "POST",
            url: '/addContact',
            data: contact,
            success: function(data){
                var contacts = data;
                AppDispatcher.dispatch({
                    type: AppConstants.CONTACT_LIST_LOAD_SUCCESS,
                    contacts: contacts
                })
            }          
        });
    },

    applyFilter(filter){
        AppDispatcher.dispatch({
            type: AppConstants.SEARCH_INPUT_CHANGED,
            filter: filter
        })
    },

    selectContact(id) {
        AppDispatcher.dispatch({
            type: AppConstants.CONTACT_SELECTED,
            id: id
        })
    },

    showList() {
        AppDispatcher.dispatch({
            type: AppConstants.SHOW_LIST           
        })
    }
}

export default ContactListActions;