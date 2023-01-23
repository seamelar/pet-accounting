using Microsoft.AspNetCore.Mvc;

namespace FeedManagementService.Controllers
{
    public class FeedController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
