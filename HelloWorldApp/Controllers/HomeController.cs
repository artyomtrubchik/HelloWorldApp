using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HelloWorldApp.Models;
using HelloWorldApp.Repository.Abstract;

namespace HelloWorldApp.Controllers
{
    public class HomeController : Controller
    {
        private static IContactRepository contactRepository;
        public HomeController(IContactRepository _contactRepository)
        {
            contactRepository = _contactRepository;
        }

        public ActionResult Index()
        {
            return View();
        }

        [Route("contacts")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Comments()
        {
            return Json(contactRepository.GetAllContacts());
        }

        [Route("addContact")]
        [HttpPost]
        public ActionResult AddContact(ContactModel contact)
        {
            contactRepository.AddContact(contact);        
            return Json(contactRepository.GetAllContacts());
        }

        [Route("getContactById")]
        [HttpGet]
        public ActionResult GetContactById(int id)
        {
            return Json(contactRepository.GetContactById(id));           
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
