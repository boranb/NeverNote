using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NeverNote.Api.Controllers
{
    public class TestController : ApiController
    {
        // api/Test/Time
        [HttpGet]
        public DateTime Time()
        {
            return DateTime.Now;
        }
    }
}
