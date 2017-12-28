using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HelloWorldApp.Models;

namespace HelloWorldApp.Controllers
{
    public class HomeController : Controller
    {
        private static IList<ContactModel> _contacts;
        static HomeController()
        {
            _contacts = new List<ContactModel>
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
            for (int i = 4; i<0; i++){
                _contacts.Add(new ContactModel
                {
                    Id = i,
                    FirstName = "Jo",
                    LastName = "Walke",
                    Gender = "female",
                    IsBusinessContact = true,
                    ProfilePicture = ""
                });
            };
        }

        public ActionResult Index()
        {
            return View();
        }

        [Route("contacts")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Comments()
        {
            return Json(_contacts);
        }

        [Route("addContact")]
        [HttpPost]
        public ActionResult AddContact(ContactModel contact)
        {
            contact.Id = _contacts.Last().Id + 1;
            _contacts.Add(contact);
            return Json(_contacts);
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
