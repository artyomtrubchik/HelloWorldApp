using HelloWorldApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelloWorldApp.Repository.Abstract
{
    public interface IContactRepository
    {
         List<ContactModel> GetAllContacts();
        void AddContact(ContactModel contact);

        ContactModel GetContactById(int id);

    }
}
