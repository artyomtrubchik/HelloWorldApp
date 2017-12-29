using HelloWorldApp.Repository.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelloWorldApp.Models;

namespace HelloWorldApp.Repository.Concrete
{
    public class ContactRepository : IContactRepository
    {
        List<ContactModel> contacts = new List<ContactModel>
            {
                new ContactModel
                {
                    Id = 1,
                    FirstName = "Daniel",
                    LastName = "Lo Nigro",
                    Gender = "male",
                    IsBusinessContact = true,
                    ProfilePicture = "/profilePictures/1.jpg"
                },
                new ContactModel
                {
                    Id = 2,
                    FirstName = "Pete",
                    LastName = "Hunt",
                    Gender = "male",
                    IsBusinessContact = false,
                    ProfilePicture = ""
                },
                new ContactModel
                {
                    Id = 3,
                    FirstName = "Jo",
                    LastName = "Walke",
                    Gender = "female",
                    IsBusinessContact = true,
                    ProfilePicture = "/profilePictures/3.jpg"
                }
            };


        public void AddContact(ContactModel contact)
        {
            contact.Id = contacts.Last().Id + 1;
            contacts.Add(contact);
        }

        public List<ContactModel> GetAllContacts()
        {
            return contacts;
            //for (int i = 4; i < 0; i++)
            //{
            //    _contacts.Add(new ContactModel
            //    {
            //        Id = i,
            //        FirstName = "Jo",
            //        LastName = "Walke",
            //        Gender = "female",
            //        IsBusinessContact = true,
            //        ProfilePicture = ""
            //    });
            //};
        }

        public ContactModel GetContactById(int id)
        {
            return contacts.Where(x => x.Id == id).FirstOrDefault();
        }
    }
}
