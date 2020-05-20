using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NeverNote.Api.Models;

namespace NeverNote.Api.Controllers
{
    public class NotesController : BaseApiController
    {
        [HttpGet]
        public IQueryable<Note> List()
        {
            return db.Notes;
        }

    }
}
