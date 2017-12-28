import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/appDispatcher';
import AppConstants from '../constants/appConstants'

const CHANGE_EVENT = 'change';
const SELECT_EVENT = 'select';
let _contactList = [];
let _hideContactList = false;

const ContactListStore = Object.assign({}, EventEmitter.prototype, {
    getContactList(){
        return _contactList;
    },
    isHidden() {
        return _hideContactList;
    },
    getSelectedContact() {
        return _contactList.filter((contact) => contact.selected)[0];
    },
    emitChange(){
        this.emit(CHANGE_EVENT);
    },
    emitSelect() {
        this.emit(SELECT_EVENT);
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
            _contactList = _contactList.map((contact) => {
                contact.selected = false;
                if (contact.id == action.id) {
                    contact.selected = true;
                }
                return contact;
            });
            _hideContactList = true;
            ContactListStore.emitSelect();
            break;
        }
        case AppConstants.SHOW_LIST: {
            _hideContactList = false;
            ContactListStore.emitSelect();
            break;
        }
        default:{
            _contactList = [];
        }
    }
})

export default ContactListStore;