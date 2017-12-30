using HelloWorldApp.Controllers;
using HelloWorldApp.Models;
using HelloWorldApp.Repository.Abstract;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NSubstitute;
using Xunit;

namespace HelloWorldApp.UnitTests.Controllers
{
    public class HomeControllerTests
    {
        [Fact]
        public void GetContactById_SpecificId_ReturnsContact()
        {
            IContactRepository fakeRepo = Substitute.For<IContactRepository>();
            HomeController hc = new HomeController(fakeRepo);

            fakeRepo.GetContactById(Arg.Any<int>()).Returns(GetFakeContact());
            JsonResult result = hc.GetContactById(1) as JsonResult;

            Assert.Equal(GetFakeContact().ToString(), result.Value.ToString());
        }

        public ContactModel GetFakeContact()
        {
            return new ContactModel
            {
                Id = 1,
                FirstName = "Daniel",
                LastName = "Lo Nigro",
                Gender = "male",
                IsBusinessContact = true,
                ProfilePicture = "/profilePictures/1.jpg"
            };
        }
    }
}
