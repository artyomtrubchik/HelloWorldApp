using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace HelloWorldApp.Models{
    public class ContactModel{
        public int Id {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Gender {get;set;}
        public bool IsBusinessContact {get;set;}
        public string ProfilePicture {get;set;}
    } 
}