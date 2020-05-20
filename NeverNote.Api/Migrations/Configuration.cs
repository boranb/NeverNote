using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using NeverNote.Api.Models;

namespace NeverNote.Api.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<NeverNote.Api.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(NeverNote.Api.Models.ApplicationDbContext context)
        {
            var userName = "boran@bekoo.co";
            if (!context.Users.Any(u => u.UserName == userName))
            {
                var store = new UserStore<ApplicationUser>(context);
                var manager = new UserManager<ApplicationUser>(store);
                var user = new ApplicationUser { UserName = userName, Email = userName, EmailConfirmed = true };

                manager.Create(user, "Password1.");

                for (int i = 1; i <= 5; i++)
                {
                    context.Notes.Add(new Note()
                    {
                        AuthorId = user.Id,
                        Title = "Sample Note " + i,
                        Content = "Donec varius quam nunc, a posuere sapien mattis ac. Praesent pellentesque sollicitudin diam at vulputate.",
                        CreationTime = DateTime.Now,
                        ModificationTime = DateTime.Now
                    });
                }
            }
        }
    }
}
