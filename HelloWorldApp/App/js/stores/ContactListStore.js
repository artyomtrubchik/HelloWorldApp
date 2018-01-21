import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/appDispatcher';
import AppConstants from '../constants/appConstants'

const CHANGE_EVENT = 'change';
const SELECT_EVENT = 'select';
const CONTACT_LOADED_EVENT = 'contactLoaded';


let _contactList = [];
let _filter = '';
let _selectedContactId;
let _selectedContact;
let _hideContactList = false;

const ContactListStore = Object.assign({}, EventEmitter.prototype, {
    getContactList(){        
        return _contactList.filter(contact => 
        {
            let match = false;
            for (var property in contact) {
                if(contact[property].toString().toLowerCase().includes(_filter)) {
                    match = true;
                    break;
                }
            }
            return match;
        }
      );
    },
    isHidden() {
        return _hideContactList;
    },
    getSelectedContact() {
        return _selectedContact;
    },
    getSelectedContactId() {
        return _selectedContactId;
    },
    emitChange(){
        this.emit(CHANGE_EVENT);
    },
    emitSelect() {
        this.emit(SELECT_EVENT);
    },
    emitContactLoaded() {
        this.emit(CONTACT_LOADED_EVENT);
    },
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    addSelectListener(callback) {
        this.on(SELECT_EVENT, callback);
    },
    removeSelectListener(callback) {
        this.removeListener(SELECT_EVENT, callback);
    },
    addContactLoadListener(callback) {
         this.on(CONTACT_LOADED_EVENT, callback);
    },
    removeContactLoadListener(callback) {
        this.removeListener(CONTACT_LOADED_EVENT, callback);
    }
})


AppDispatcher.register(function(action){
    switch(action.type){
        case AppConstants.CONTACT_LIST_LOAD_SUCCESS:{
            _contactList = action.contacts;
            ContactListStore.emitChange();
            break;
        }
        case AppConstants.CONTACT_LIST_UPDATE:{
            _contactList.push(action.contact);
            ContactListStore.emitChange();
            break;
        }
        case AppConstants.CONTACT_SELECTED: { 
            _selectedContact = null;
            _selectedContactId = action.id;
            _hideContactList = true;
            ContactListStore.emitSelect();
            break;
        }
        case AppConstants.SHOW_LIST: {
            _hideContactList = false;
            ContactListStore.emitSelect();
            break;
        }
        case AppConstants.CONTACT_LOADED:{
            _selectedContact = action.contact;
            ContactListStore.emitContactLoaded();
            break;
        }
        case AppConstants.SEARCH_INPUT_CHANGED:{
            _filter = action.filter.toLowerCase();
            ContactListStore.emitChange();
            break;
        }
        default:{
            _contactList = [];
        }
    }
})

export default ContactListStore;