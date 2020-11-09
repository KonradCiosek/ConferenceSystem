using ConferenceSystem.Web.Data.Entitites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceSystem.Web.Data
{
    public class Context : DbContext
    {
        public DbSet<Room1> Room1 { get; set; }
        public DbSet<Room2> Room2 { get; set; }
        public DbSet<Room3> Room3 { get; set; }
    }
}
